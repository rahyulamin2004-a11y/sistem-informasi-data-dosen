/* =================================
   URL GOOGLE APPS SCRIPT
================================= */

const WEB_APP_URL =
  "Id Googel script/exec";

const documentSections = [
  {
    title: "PROFIL DOSEN",
    description: "Upload dokumen profil dan identitas dosen.",
    icon: "👤",
    color: "color-blue",

    items: [
      {
        id: "data-pribadi",
        title: "DATA PRIBADI",
        description: "Foto, KTP, KK, dan identitas lainnya",
        icon: "🧑",
        color: "color-blue",
        folder: "Data Pribadi",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "jabatan-fungsional",
        title: "JABATAN FUNGSIONAL",
        description: "SK Jabatan Fungsional atau SK Jafung",
        icon: "📄",
        color: "color-green",
        folder: "Jabatan Fungsional",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "KUALIFIKASI",
    description: "Upload dokumen pendidikan formal dosen.",
    icon: "🎓",
    color: "color-purple",
    layoutClass: "education-horizontal",

    items: [
      {
        id: "pendidikan-sd",
        title: "SD",
        description: "Dokumen pendidikan SD",
        icon: "☁",
        color: "color-blue",
        folder: "Pendidikan Formal/SD",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pendidikan-smp",
        title: "SMP",
        description: "Dokumen pendidikan SMP",
        icon: "☁",
        color: "color-green",
        folder: "Pendidikan Formal/SMP",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pendidikan-sma",
        title: "SMA",
        description: "Dokumen pendidikan SMA",
        icon: "☁",
        color: "color-orange",
        folder: "Pendidikan Formal/SMA",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pendidikan-s1",
        title: "S1",
        description: "Dokumen pendidikan S1",
        icon: "☁",
        color: "color-purple",
        folder: "Pendidikan Formal/S1",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pendidikan-s2",
        title: "S2",
        description: "Dokumen pendidikan S2",
        icon: "☁",
        color: "color-yellow",
        folder: "Pendidikan Formal/S2",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pendidikan-s3",
        title: "S3",
        description: "Dokumen pendidikan S3",
        icon: "☁",
        color: "color-cyan",
        folder: "Pendidikan Formal/S3",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "KOMPETENSI",
    description: "Upload dokumen sertifikasi dan kompetensi dosen.",
    icon: "🏅",
    color: "color-yellow",

    items: [
      {
        id: "sertifikasi",
        title: "SERTIFIKASI",
        description:
          "Sertifikat kompetensi, profesi, pelatihan, atau keahlian",
        icon: "🏅",
        color: "color-yellow",
        folder: "Sertifikasi",
        accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "PELAKSANAAN PENDIDIKAN",
    description: "Upload dokumen kegiatan pelaksanaan pendidikan.",
    icon: "📚",
    color: "color-green",

    items: [
      {
        id: "pengajaran",
        title: "PENGAJARAN",
        description:
          "SK Pengampu MK, RPS, jurnal mengajar, absensi, nilai, dan rubrik penilaian",
        icon: "📘",
        color: "color-green",
        folder: "Pengajaran",
        accept:
          ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
      },
      {
        id: "bimbingan-mahasiswa",
        title: "BIMBINGAN MAHASISWA",
        description:
          "SK, undangan, dan lembar pengesahan skripsi",
        icon: "👥",
        color: "color-orange",
        folder: "Bimbingan Mahasiswa",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pengujian-mahasiswa",
        title: "PENGUJIAN MAHASISWA",
        description:
          "SK, undangan, dan lembar pengesahan",
        icon: "📝",
        color: "color-purple",
        folder: "Pengujian Mahasiswa",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "bahan-ajar",
        title: "BAHAN AJAR",
        description:
          "Bahan ajar sesuai mata kuliah yang diajar",
        icon: "📖",
        color: "color-yellow",
        folder: "Bahan Ajar",
        accept:
          ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx"
      },
      {
        id: "tugas-tambahan",
        title: "TUGAS TAMBAHAN",
        description:
          "SK tugas tambahan dosen",
        icon: "📋",
        color: "color-blue",
        folder: "Tugas Tambahan",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "PELAKSANAAN PENELITIAN",
    description:
      "Upload dokumen penelitian dan publikasi karya ilmiah.",
    icon: "🔬",
    color: "color-cyan",

    items: [
      {
        id: "penelitian",
        title: "PENELITIAN",
        description:
          "SK kegiatan dan laporan kegiatan penelitian",
        icon: "🔬",
        color: "color-cyan",
        folder: "Penelitian",
        accept:
          ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
      },
      {
        id: "publikasi-karya-ilmiah",
        title: "PUBLIKASI KARYA ILMIAH",
        description:
          "Publikasi karya ilmiah nasional dan internasional",
        icon: "📰",
        color: "color-blue",
        folder: "Publikasi Karya Ilmiah",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "paten-hki",
        title: "PATEN / HKI",
        description:
          "Dokumen paten dan Hak Kekayaan Intelektual",
        icon: "💡",
        color: "color-yellow",
        folder: "Paten dan HKI",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "PELAKSANAAN PENGABDIAN (PKM)",
    description:
      "Upload dokumen pelaksanaan pengabdian kepada masyarakat.",
    icon: "🤝",
    color: "color-orange",

    items: [
      {
        id: "pengabdian-masyarakat",
        title: "PENGABDIAN KEPADA MASYARAKAT",
        description:
          "SK, laporan kegiatan PKM, dan publikasi",
        icon: "🤝",
        color: "color-orange",
        folder: "Pengabdian Kepada Masyarakat",
        accept:
          ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
      },
      {
        id: "pembinaan",
        title: "PEMBINAAN",
        description:
          "SK, undangan, dan sertifikat kegiatan pembinaan",
        icon: "👨‍🏫",
        color: "color-green",
        folder: "Pembinaan",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "pengelola-jurnal",
        title: "PENGELOLA JURNAL",
        description:
          "SK pengelola, editor, atau reviewer jurnal",
        icon: "📚",
        color: "color-blue",
        folder: "Pengelola Jurnal",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "jabatan-struktural",
        title: "JABATAN STRUKTURAL",
        description:
          "SK jabatan struktural dosen",
        icon: "🏢",
        color: "color-purple",
        folder: "Jabatan Struktural",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "PENUNJANG",
    description: "Upload dokumen kegiatan penunjang dosen.",
    icon: "📋",
    color: "color-gray",

    items: [
      {
        id: "anggota-profesi",
        title: "ANGGOTA PROFESI",
        description:
          "SK atau bukti keanggotaan organisasi profesi",
        icon: "👥",
        color: "color-blue",
        folder: "Anggota Profesi",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      },
      {
        id: "penunjang-lain",
        title: "PENUNJANG LAIN",
        description:
          "SK dan dokumen kegiatan penunjang lainnya",
        icon: "📎",
        color: "color-yellow",
        folder: "Penunjang Lain",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "DOKUMEN BKD",
    description:
      "Upload dokumen pendukung Beban Kerja Dosen.",
    icon: "🗂️",
    color: "color-pink",

    items: [
      {
        id: "sk-bkd",
        title: "SK BKD",
        description:
          "SK atau dokumen pendukung Beban Kerja Dosen",
        icon: "🗂️",
        color: "color-pink",
        folder: "Dokumen BKD",
        accept:
          ".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
      }
    ]
  },

  {
    title: "LAYANAN PAK",
    description:
      "Upload dokumen layanan PAK dan kepangkatan dosen.",
    icon: "📈",
    color: "color-red",

    items: [
      {
        id: "sk-pangkat",
        title: "SK PANGKAT",
        description:
          "SK pangkat atau dokumen kenaikan pangkat dosen",
        icon: "📈",
        color: "color-red",
        folder: "Layanan PAK",
        accept:
          ".pdf,.doc,.docx,.jpg,.jpeg,.png"
      }
    ]
  }
];


/* =================================
   MENGAMBIL ELEMEN HTML
================================= */

const accordionContainer =
  document.getElementById("accordionContainer");

const lecturerForm =
  document.getElementById("lecturerForm");

const namaDosenInput =
  document.getElementById("namaDosen");

const nipInput =
  document.getElementById("nip");

const uploadButton =
  document.getElementById("uploadButton");

const resetButton =
  document.getElementById("resetButton");

const toast =
  document.getElementById("toast");

const toastIcon =
  document.getElementById("toastIcon");

const toastMessage =
  document.getElementById("toastMessage");


/* =================================
   MEMBUAT LACI DAN INPUT FILE
================================= */

function renderAccordion() {
  accordionContainer.innerHTML =
    documentSections
      .map((section, sectionIndex) => {
        const rows = section.items
          .map((item) => {
            return `
              <div
                class="document-row"
                id="row-${item.id}"
              >

                <div class="document-info">

                  <div
                    class="document-icon ${item.color}"
                  >
                    ${item.icon}
                  </div>

                  <div class="document-text">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                  </div>

                </div>

                <div class="file-control">

                  <input
                    type="file"
                    class="file-input"
                    id="${item.id}"
                    name="${item.id}"
                    accept="${item.accept}"
                    multiple
                    data-section="${section.title}"
                    data-folder="${item.folder}"
                    data-title="${item.title}"
                  >

                  <label
                    for="${item.id}"
                    class="file-button"
                  >
                    Pilih File
                  </label>

                  <div
                    class="file-name"
                    id="filename-${item.id}"
                    title="Belum ada file"
                  >
                    Belum ada file
                  </div>

                  <button
                    type="button"
                    class="file-remove"
                    data-input-id="${item.id}"
                    aria-label="Hapus file ${item.title}"
                    title="Hapus file yang dipilih"
                  >
                    ×
                  </button>

                </div>

              </div>
            `;
          })
          .join("");

        return `
          <article
            class="accordion-item ${section.layoutClass || ""}"
            data-index="${sectionIndex}"
          >

            <button
              type="button"
              class="accordion-header"
              aria-expanded="false"
            >

              <span
                class="section-icon ${section.color}"
              >
                ${section.icon}
              </span>

              <span class="section-text">
                <h3>${section.title}</h3>
                <p>${section.description}</p>
              </span>

              <span
                class="accordion-arrow"
                aria-hidden="true"
              ></span>

            </button>

            <div class="accordion-content">

              <div class="document-list">
                ${rows}
              </div>

            </div>

          </article>
        `;
      })
      .join("");

  activateAccordion();
  activateFileInputs();
  activateRemoveButtons();
}


/* =================================
   MEMBUKA DAN MENUTUP LACI
================================= */

function activateAccordion() {
  const accordionItems =
    document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header =
      item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const isOpen =
        item.classList.contains("open");

      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("open");

        const otherHeader =
          otherItem.querySelector(
            ".accordion-header"
          );

        otherHeader.setAttribute(
          "aria-expanded",
          "false"
        );
      });

      if (!isOpen) {
        item.classList.add("open");

        header.setAttribute(
          "aria-expanded",
          "true"
        );
      }
    });
  });
}


/* =================================
   MENAMPILKAN NAMA FILE
================================= */

function activateFileInputs() {
  const fileInputs =
    document.querySelectorAll(
      ".file-input"
    );

  fileInputs.forEach((input) => {
    input.addEventListener(
      "change",
      () => {
        /*
          Saat pengguna memilih file baru,
          status upload sebelumnya dibatalkan.
        */
        input.dataset.uploaded =
          "false";

        const documentRow =
          document.getElementById(
            `row-${input.id}`
          );

        if (documentRow) {
          documentRow.classList.remove(
            "uploaded"
          );
        }

        updateSingleFileDisplay(
          input
        );
      }
    );
  });
}


/* =================================
   TOMBOL X HAPUS FILE
================================= */

function activateRemoveButtons() {
  const removeButtons =
    document.querySelectorAll(
      ".file-remove"
    );

  removeButtons.forEach((button) => {
    button.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();

        const inputId =
          button.dataset.inputId;

        const input =
          document.getElementById(
            inputId
          );

        if (!input) {
          return;
        }

        input.value = "";

        input.dataset.uploaded =
          "false";

        const documentRow =
          document.getElementById(
            `row-${input.id}`
          );

        if (documentRow) {
          documentRow.classList.remove(
            "uploaded"
          );
        }

        updateSingleFileDisplay(
          input
        );

        showToast(
          "File berhasil dihapus dari pilihan.",
          "success"
        );
      }
    );
  });
}


/* =================================
   MEMPERBARUI TAMPILAN FILE
================================= */

function updateSingleFileDisplay(
  input
) {
  const fileNameElement =
    document.getElementById(
      `filename-${input.id}`
    );

  const documentRow =
    document.getElementById(
      `row-${input.id}`
    );

  const files =
    Array.from(
      input.files || []
    );

  if (files.length === 0) {
    fileNameElement.textContent =
      "Belum ada file";

    fileNameElement.title =
      "Belum ada file";

    documentRow.classList.remove(
      "has-file",
      "uploaded"
    );

    return;
  }

  documentRow.classList.add(
    "has-file"
  );

  if (files.length === 1) {
    fileNameElement.textContent =
      files[0].name;

    fileNameElement.title =
      files[0].name;
  } else {
    fileNameElement.textContent =
      `${files.length} file dipilih`;

    fileNameElement.title =
      files
        .map((file) => file.name)
        .join(", ");
  }
}


/* =================================
   NIP HANYA BOLEH ANGKA
================================= */

nipInput.addEventListener(
  "input",
  () => {
    nipInput.value =
      nipInput.value.replace(
        /\D/g,
        ""
      );
  }
);


/* =================================
   MENGUBAH FILE MENJADI BASE64
================================= */

function convertFileToBase64(
  file
) {
  return new Promise(
    (resolve, reject) => {
      const reader =
        new FileReader();

      reader.onload =
        function () {
          const result =
            String(
              reader.result || ""
            );

          const commaIndex =
            result.indexOf(",");

          const base64 =
            commaIndex >= 0
              ? result.substring(
                  commaIndex + 1
                )
              : result;

          resolve(base64);
        };

      reader.onerror =
        function () {
          reject(
            new Error(
              "Gagal membaca file: " +
              file.name
            )
          );
        };

      reader.readAsDataURL(
        file
      );
    }
  );
}


/* =================================
   MENGIRIM FILE KE APPS SCRIPT
================================= */

async function sendFileToGoogleDrive(
  payload
) {
  if (
    !WEB_APP_URL ||
    !WEB_APP_URL.startsWith(
      "https://script.google.com/macros/"
    ) ||
    !WEB_APP_URL.endsWith(
      "/exec"
    )
  ) {
    throw new Error(
      "URL Web App Google Apps Script belum benar."
    );
  }

  const formData =
    new URLSearchParams();

  formData.append(
    "payload",
    JSON.stringify(payload)
  );

  console.log(
    "Mengirim file:",
    payload.fileName
  );

  await fetch(
    WEB_APP_URL,
    {
      method: "POST",
      mode: "no-cors",
      body: formData
    }
  );

  console.log(
    "File selesai dikirim:",
    payload.fileName
  );
}


/* =================================
   VALIDASI, SIMPAN, DAN UPLOAD
================================= */

lecturerForm.addEventListener(
  "submit",
  async function (event) {
    event.preventDefault();

    const namaDosen =
      namaDosenInput.value.trim();

    const nip =
      nipInput.value.trim();

    const fileInputs =
      document.querySelectorAll(
        ".file-input"
      );

    const uploadQueue = [];

    let selectedFileCount = 0;


    /*
      Mengumpulkan file yang belum
      pernah diupload.
    */
    fileInputs.forEach(
      function (input) {
        const files =
          Array.from(
            input.files || []
          );

        selectedFileCount +=
          files.length;

        /*
          File yang sudah berstatus
          uploaded tidak dikirim ulang.
        */
        if (
          input.dataset.uploaded ===
          "true"
        ) {
          return;
        }

        files.forEach(
          function (file) {
            uploadQueue.push({
              input: input,
              file: file
            });
          }
        );
      }
    );


    /* VALIDASI NAMA DOSEN */

    if (namaDosen.length < 3) {
      showToast(
        "Masukkan nama dosen dengan benar.",
        "error"
      );

      namaDosenInput.focus();

      return;
    }


    /* VALIDASI NIP */

    if (!nip) {
  showToast(
    "NIP wajib diisi.",
    "error"
  );

  nipInput.focus();
  return;
}


    /* BELUM ADA FILE DIPILIH */

    if (selectedFileCount === 0) {
      showToast(
        "Pilih minimal satu dokumen.",
        "error"
      );

      return;
    }


    /* SEMUA FILE SUDAH DIUPLOAD */

    if (uploadQueue.length === 0) {
      showToast(
        "Semua file yang dipilih sudah diupload. Pilih file baru atau tekan Reset Form.",
        "success"
      );

      return;
    }


    uploadButton.disabled =
      true;

    try {
      /*
        File dikirim satu per satu.
      */
      for (
        let index = 0;
        index <
        uploadQueue.length;
        index++
      ) {
        const uploadItem =
          uploadQueue[index];

        const input =
          uploadItem.input;

        const file =
          uploadItem.file;

        uploadButton.textContent =
          "Mengunggah " +
          (index + 1) +
          " dari " +
          uploadQueue.length +
          "...";

        const base64 =
          await convertFileToBase64(
            file
          );

        const payload = {
          namaDosen:
            namaDosen,

          nip:
            nip,

          section:
            input.dataset.section,

          folderPath:
            input.dataset.folder,

          documentTitle:
            input.dataset.title,

          fileName:
            file.name,

          mimeType:
            file.type ||
            "application/octet-stream",

          base64:
            base64
        };

        await sendFileToGoogleDrive(
          payload
        );
      }


      /*
        Menandai input yang sudah
        berhasil dikirim.

        File tidak dihapus dari layar.
      */
      const uploadedInputs =
        new Set(
          uploadQueue.map(
            function (item) {
              return item.input;
            }
          )
        );

      uploadedInputs.forEach(
        function (input) {
          input.dataset.uploaded =
            "true";

          const documentRow =
            document.getElementById(
              `row-${input.id}`
            );

          const fileNameElement =
            document.getElementById(
              `filename-${input.id}`
            );

          const files =
            Array.from(
              input.files || []
            );

          documentRow.classList.add(
            "has-file",
            "uploaded"
          );

          if (files.length === 1) {
            fileNameElement.textContent =
              "✓ " +
              files[0].name +
              " — sudah diupload";

            fileNameElement.title =
              files[0].name +
              " — sudah diupload";
          } else {
            fileNameElement.textContent =
              "✓ " +
              files.length +
              " file sudah diupload";

            fileNameElement.title =
              files
                .map(
                  function (file) {
                    return file.name;
                  }
                )
                .join(", ");
          }
        }
      );


      showToast(
        uploadQueue.length +
        " file berhasil dikirim ke Google Drive.",
        "success"
      );

      /*
        Jangan kosongkan input file di sini.
        File tetap terlihat sampai tombol ×
        atau Reset Form ditekan.
      */

    } catch (error) {
      console.error(
        "Upload gagal:",
        error
      );

      showToast(
        error.message ||
        "Terjadi kesalahan saat mengirim file.",
        "error"
      );

    } finally {
      uploadButton.disabled =
        false;

      uploadButton.textContent =
        "Simpan & Upload";
    }
  }
);


/* =================================
   RESET FORM
================================= */

resetButton.addEventListener(
  "click",
  () => {
    const confirmation =
      confirm(
        "Apakah Anda yakin ingin mengosongkan seluruh form?"
      );

    if (!confirmation) {
      return;
    }

    lecturerForm.reset();


    /*
      Menghapus status upload
      pada semua input.
    */
    document
      .querySelectorAll(
        ".file-input"
      )
      .forEach(
        function (input) {
          input.dataset.uploaded =
            "false";
        }
      );


    document
      .querySelectorAll(
        ".document-row"
      )
      .forEach(
        function (row) {
          row.classList.remove(
            "has-file",
            "uploaded"
          );
        }
      );


    document
      .querySelectorAll(
        ".file-name"
      )
      .forEach(
        function (fileName) {
          fileName.textContent =
            "Belum ada file";

          fileName.title =
            "Belum ada file";
        }
      );


    document
      .querySelectorAll(
        ".accordion-item"
      )
      .forEach(
        function (item) {
          item.classList.remove(
            "open"
          );

          item
            .querySelector(
              ".accordion-header"
            )
            .setAttribute(
              "aria-expanded",
              "false"
            );
        }
      );


    showToast(
      "Form berhasil dikosongkan.",
      "success"
    );


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);

/* =================================
   NOTIFIKASI
================================= */

let toastTimer;

function showToast(
  message,
  type = "success"
) {
  clearTimeout(toastTimer);

  toastMessage.textContent =
    message;

  toast.classList.remove(
    "show",
    "success",
    "error"
  );

  toast.classList.add(type);

  toastIcon.textContent =
    type === "success"
      ? "✓"
      : "!";

  setTimeout(() => {
    toast.classList.add("show");
  }, 20);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}


/* =================================
   MENJALANKAN SISTEM
================================= */

renderAccordion();