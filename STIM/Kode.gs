/* ==================================================
   KONFIGURASI UTAMA
================================================== */

/*
  Ganti dengan ID folder utama DATA DOSEN
  yang sudah Anda buat di Google Drive.
*/
const ROOT_FOLDER_ID =
  "Id Folder google drieve";

/*
  true:
  Seluruh struktur folder dibuat otomatis
  saat NIP dosen pertama kali didaftarkan.

  false:
  Hanya folder sesuai file yang diunggah
  yang akan dibuat.
*/
const CREATE_ALL_FOLDERS_ON_FIRST_UPLOAD = true;


/* ==================================================
   STRUKTUR FOLDER DATA DOSEN
================================================== */

const FOLDER_STRUCTURE = {
  "PROFIL DOSEN": [
    "Data Pribadi",
    "Jabatan Fungsional"
  ],

  "KUALIFIKASI": [
    "Pendidikan Formal/SD",
    "Pendidikan Formal/SMP",
    "Pendidikan Formal/SMA",
    "Pendidikan Formal/S1",
    "Pendidikan Formal/S2",
    "Pendidikan Formal/S3"
  ],

  "KOMPETENSI": [
    "Sertifikasi"
  ],

  "PELAKSANAAN PENDIDIKAN": [
    "Pengajaran",
    "Bimbingan Mahasiswa",
    "Pengujian Mahasiswa",
    "Bahan Ajar",
    "Tugas Tambahan"
  ],

  "PELAKSANAAN PENELITIAN": [
    "Penelitian",
    "Publikasi Karya Ilmiah",
    "Paten dan HKI"
  ],

  "PELAKSANAAN PENGABDIAN (PKM)": [
    "Pengabdian Kepada Masyarakat",
    "Pembinaan",
    "Pengelola Jurnal",
    "Jabatan Struktural"
  ],

  "PENUNJANG": [
    "Anggota Profesi",
    "Penunjang Lain"
  ],

  "DOKUMEN BKD": [
    "Dokumen BKD"
  ],

  "LAYANAN PAK": [
    "Layanan PAK"
  ]
};


/* ==================================================
   TEST WEB APP
================================================== */

function doGet() {
  return createJsonResponse_({
    success: true,
    message:
      "Backend Sistem Informasi Data Dosen aktif."
  });
}


/* ==================================================
   MENERIMA FILE DARI WEBSITE
================================================== */

function doPost(e) {
  try {
    console.log(
      "doPost diterima:",
      JSON.stringify({
        parameters:
          e && e.parameters
            ? e.parameters
            : null,

        hasPostData:
          Boolean(
            e &&
            e.postData &&
            e.postData.contents
          )
      })
    );

    const payload =
      parseRequest_(e);

    const namaDosen =
      sanitizeFolderName_(
        payload.namaDosen
      );

    const nip =
      cleanNip_(
        payload.nip
      );

    const section =
      sanitizeFolderName_(
        payload.section
      );

    const folderPath =
      String(
        payload.folderPath || ""
      ).trim();

    const originalFileName =
      sanitizeFileName_(
        payload.fileName
      );

    const mimeType =
      String(
        payload.mimeType ||
        "application/octet-stream"
      ).trim();

    const base64Data =
      cleanBase64_(
        payload.base64
      );

    /*
      Lock mencegah folder dosen terbuat ganda
      ketika beberapa upload dilakukan bersamaan.
    */
    const lock =
      LockService.getScriptLock();

    lock.waitLock(30000);

    let destinationFolder;
    let dosenFolder;
    let dosenFolderCreated = false;

    try {
      const rootFolder =
        DriveApp.getFolderById(
          ROOT_FOLDER_ID
        );

      const folderResult =
        getOrCreateDosenFolder_(
          rootFolder,
          nip,
          namaDosen
        );

      dosenFolder =
        folderResult.folder;

      dosenFolderCreated =
        folderResult.created;

      /*
        Membuat seluruh struktur folder
        ketika folder dosen baru dibuat.
      */
      if (
        dosenFolderCreated &&
        CREATE_ALL_FOLDERS_ON_FIRST_UPLOAD
      ) {
        createCompleteFolderStructure_(
          dosenFolder
        );
      }

      /*
        Memastikan folder tujuan file tersedia.
      */
      const sectionFolder =
        getOrCreateFolder_(
          dosenFolder,
          section
        );

      destinationFolder =
        getOrCreateFolderPath_(
          sectionFolder,
          folderPath
        );

    } finally {
      lock.releaseLock();
    }

    /*
      Mengubah Base64 menjadi file.
    */
    const fileBytes =
      Utilities.base64Decode(
        base64Data
      );

    const finalFileName =
      createUniqueFileName_(
        destinationFolder,
        originalFileName
      );

    const fileBlob =
      Utilities.newBlob(
        fileBytes,
        mimeType,
        finalFileName
      );

    const uploadedFile =
      destinationFolder.createFile(
        fileBlob
      );

    return createJsonResponse_({
      success: true,

      message:
        "File berhasil diunggah ke Google Drive.",

      nip: nip,

      dosenFolderCreated:
        dosenFolderCreated,

      dosenFolderName:
        dosenFolder.getName(),

      fileName:
        uploadedFile.getName(),

      fileId:
        uploadedFile.getId(),

      fileUrl:
        uploadedFile.getUrl(),

      destinationFolder:
        destinationFolder.getName(),

      folderUrl:
        destinationFolder.getUrl()
    });

  } catch (error) {
    console.error(error);

    return createJsonResponse_({
      success: false,

      message:
        error.message ||
        "Terjadi kesalahan saat mengunggah file."
    });
  }
}


/* ==================================================
   MEMBACA DATA POST
================================================== */

function parseRequest_(e) {
  if (!e) {
    throw new Error(
      "Permintaan tidak ditemukan."
    );
  }

  /*
    Data dari script.js yang dikirim
    menggunakan URLSearchParams.
  */
  if (
    e.parameter &&
    e.parameter.payload
  ) {
    try {
      return JSON.parse(
        e.parameter.payload
      );
    } catch (error) {
      throw new Error(
        "Parameter payload bukan JSON yang valid."
      );
    }
  }

  /*
    Cadangan jika script.js mengirim
    JSON secara langsung.
  */
  if (
    e.postData &&
    e.postData.contents
  ) {
    const requestBody =
      String(
        e.postData.contents
      ).trim();

    if (!requestBody) {
      throw new Error(
        "Isi permintaan kosong."
      );
    }

    try {
      return JSON.parse(
        requestBody
      );
    } catch (error) {
      throw new Error(
        "Data POST bukan JSON yang valid."
      );
    }
  }

  throw new Error(
    "Data kiriman tidak ditemukan."
  );
}

/* ==================================================
   VALIDASI DATA
================================================== */

function validatePayload_(payload) {
  if (!payload) {
    throw new Error(
      "Data upload tidak ditemukan."
    );
  }

  const namaDosen =
    String(
      payload.namaDosen || ""
    ).trim();

  const nip =
    cleanNip_(
      payload.nip
    );

  const section =
    String(
      payload.section || ""
    ).trim();

  const fileName =
    String(
      payload.fileName || ""
    ).trim();

  const base64 =
    String(
      payload.base64 || ""
    ).trim();

  if (namaDosen.length < 3) {
    throw new Error(
      "Nama dosen tidak valid."
    );
  }

  if (nip.length < 8) {
    throw new Error(
      "NIP tidak valid."
    );
  }

  if (!section) {
    throw new Error(
      "Kategori dokumen tidak ditemukan."
    );
  }

  if (!fileName) {
    throw new Error(
      "Nama file tidak ditemukan."
    );
  }

  if (!base64) {
    throw new Error(
      "Isi file tidak ditemukan."
    );
  }
}


/* ==================================================
   MENCARI FOLDER DOSEN BERDASARKAN NIP

   Struktur:
   DATA DOSEN
   └── Nama Dosen
       └── NIP
================================================== */

function getOrCreateDosenFolder_(
  rootFolder,
  nip,
  namaDosen
) {
  /*
    Mencari NIP di seluruh folder nama dosen.

    Dengan cara ini, walaupun nama dosen
    ditulis berbeda, NIP yang sama tetap
    menggunakan folder yang sudah ada.
  */
  const nameFolders =
    rootFolder.getFolders();

  while (nameFolders.hasNext()) {
    const nameFolder =
      nameFolders.next();

    const nipFolders =
      nameFolder.getFoldersByName(
        nip
      );

    if (nipFolders.hasNext()) {
      return {
        folder: nipFolders.next(),
        created: false
      };
    }
  }

  /*
    Apabila NIP belum ditemukan,
    buat folder nama dosen terlebih dahulu.
  */
  const cleanName =
    sanitizeFolderName_(
      namaDosen
    ) || "Tanpa Nama";

  const nameFolder =
    getOrCreateFolder_(
      rootFolder,
      cleanName
    );

  /*
    Setelah folder nama tersedia,
    buat folder NIP di dalamnya.
  */
  const nipFolder =
    getOrCreateFolder_(
      nameFolder,
      nip
    );

  return {
    folder: nipFolder,
    created: true
  };
}

/* ==================================================
   MEMBUAT SELURUH STRUKTUR FOLDER
================================================== */

function createCompleteFolderStructure_(
  dosenFolder
) {
  Object.keys(
    FOLDER_STRUCTURE
  ).forEach(function (sectionName) {
    const sectionFolder =
      getOrCreateFolder_(
        dosenFolder,
        sectionName
      );

    const folderPaths =
      FOLDER_STRUCTURE[
        sectionName
      ];

    folderPaths.forEach(
      function (folderPath) {
        getOrCreateFolderPath_(
          sectionFolder,
          folderPath
        );
      }
    );
  });
}


/* ==================================================
   MENCARI ATAU MEMBUAT SATU FOLDER
================================================== */

function getOrCreateFolder_(
  parentFolder,
  folderName
) {
  const cleanFolderName =
    sanitizeFolderName_(
      folderName
    );

  if (!cleanFolderName) {
    return parentFolder;
  }

  const folders =
    parentFolder.getFoldersByName(
      cleanFolderName
    );

  if (folders.hasNext()) {
    return folders.next();
  }

  return parentFolder.createFolder(
    cleanFolderName
  );
}


/* ==================================================
   MEMBUAT FOLDER BERTINGKAT
================================================== */

function getOrCreateFolderPath_(
  parentFolder,
  folderPath
) {
  const pathParts =
    String(folderPath || "")
      .split("/")
      .map(function (part) {
        return sanitizeFolderName_(
          part
        );
      })
      .filter(function (part) {
        return part.length > 0;
      });

  let currentFolder =
    parentFolder;

  pathParts.forEach(
    function (folderName) {
      currentFolder =
        getOrCreateFolder_(
          currentFolder,
          folderName
        );
    }
  );

  return currentFolder;
}


/* ==================================================
   MENCEGAH NAMA FILE SAMA
================================================== */

function createUniqueFileName_(
  folder,
  fileName
) {
  const existingFiles =
    folder.getFilesByName(
      fileName
    );

  if (!existingFiles.hasNext()) {
    return fileName;
  }

  const lastDot =
    fileName.lastIndexOf(".");

  const hasExtension =
    lastDot > 0;

  const baseName =
    hasExtension
      ? fileName.substring(
          0,
          lastDot
        )
      : fileName;

  const extension =
    hasExtension
      ? fileName.substring(
          lastDot
        )
      : "";

  let number = 2;
  let candidateName;

  do {
    candidateName =
      baseName +
      " (" +
      number +
      ")" +
      extension;

    number++;

  } while (
    folder
      .getFilesByName(
        candidateName
      )
      .hasNext()
  );

  return candidateName;
}


/* ==================================================
   MEMBERSIHKAN NIP
================================================== */

function cleanNip_(nip) {
  return String(nip || "")
    .replace(/\D/g, "");
}


/* ==================================================
   MEMBERSIHKAN BASE64
================================================== */

function cleanBase64_(base64) {
  return String(base64 || "")
    .replace(
      /^data:[^;]+;base64,/,
      ""
    )
    .replace(/\s/g, "");
}


/* ==================================================
   MEMBERSIHKAN NAMA FOLDER
================================================== */

function sanitizeFolderName_(name) {
  return String(name || "")
    .trim()
    .replace(
      /[\\:*?"<>|\u0000-\u001F]/g,
      "-"
    )
    .replace(/\s+/g, " ")
    .substring(0, 150);
}


/* ==================================================
   MEMBERSIHKAN NAMA FILE
================================================== */

function sanitizeFileName_(name) {
  const cleanName =
    String(name || "")
      .trim()
      .replace(
        /[\u0000-\u001F]/g,
        ""
      )
      .replace(/[\\/]/g, "-")
      .substring(0, 200);

  return cleanName ||
    "dokumen";
}


/* ==================================================
   RESPONS JSON
================================================== */

function createJsonResponse_(data) {
  return ContentService
    .createTextOutput(
      JSON.stringify(data)
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );
}
