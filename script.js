// Data properti (ganti dengan data properti Anda)
const properties = [
    {
      id: 1,
      title: "THE MULIA",
      price: "Rp 5.000.000.000",
      description: "Rumah mewah dengan 5 kamar tidur, 3 kamar mandi, dan kolam renang pribadi.",
      location: "Jl. Sudirman No. 123, Jakarta",
      image: "img/mulia2.webp",
    },
    {
      id: 2,
      title: "Apartemen Modern",
      price: "Rp 2.500.000.000",
      description: "Apartemen modern dengan 2 kamar tidur dan pemandangan kota yang menakjubkan.",
      location: "Jl. Thamrin No. 456, Jakarta",
      image: "img/lobby-entrance.jpg",
    },
    // Tambahkan properti lainnya di sini
  ]
  
  // Fungsi untuk menampilkan modal
  function showModal(propertyId) {
    const property = properties.find((p) => p.id === propertyId)
    if (property) {
      document.getElementById("modal-title").textContent = property.title
      document.getElementById("modal-image").src = property.image
      document.getElementById("modal-description").textContent = property.description
      document.getElementById("modal-price").textContent = property.price
      document.getElementById("modal-location").textContent = property.location
      document.getElementById("property-modal").style.display = "block"
    }
  }
  
  // Event listener untuk tombol detail
  document.querySelectorAll(".detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const propertyId = Number.parseInt(e.target.closest(".property-card").dataset.id)
      showModal(propertyId)
    })
  })
  
  // Event listener untuk menutup modal
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("property-modal").style.display = "none"
  })
  
  // Event listener untuk form WhatsApp
  document.getElementById("whatsapp-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const phone = e.target.elements.phone.value
    const message = e.target.elements.message.value
    const propertyTitle = document.getElementById("modal-title").textContent
  
    // Ganti nomor WhatsApp di bawah ini dengan nomor WhatsApp perusahaan Anda
    const whatsappNumber = "6281234567890"
    const whatsappMessage = `Halo, saya ${name} tertarik dengan properti "${propertyTitle}". ${message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  
    window.open(whatsappUrl, "_blank")
  })
  
  // Event listener untuk form kontak
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault()
    // Di sini Anda dapat menambahkan logika untuk mengirim email atau menyimpan pesan kontak
    alert("Terima kasih! Pesan Anda telah terkirim.")
    e.target.reset()
  })
  
  