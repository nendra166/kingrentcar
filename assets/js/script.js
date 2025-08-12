document.addEventListener('DOMContentLoaded', function () {

    // =========================================================================
    //  LOGIKA UNTUK RENDER MOBIL & FILTER
    // =========================================================================
    
    // Cek jika carsData ada sebelum melanjutkan
    if (typeof carsData !== 'undefined') {
        const carGrid = document.getElementById('car-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Fungsi untuk merender kartu mobil
        function renderCars(filter = 'all') {
            if (!carGrid) return; // Hentikan jika grid tidak ditemukan
            
            carGrid.innerHTML = ''; // Kosongkan grid

            const filteredCars = carsData.filter(car => filter === 'all' || car.category === filter);

            if (filteredCars.length === 0) {
                carGrid.innerHTML = `<p class="col-span-full text-center text-slate-500">Tidak ada mobil tersedia dalam kategori ini.</p>`;
                return;
            }

            filteredCars.forEach(car => {
                const carCard = `
                    <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                        <div class="overflow-hidden">
                            <img src="${car.image}" alt="${car.name}" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-slate-900">${car.name}</h3>
                            <div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-slate-600 text-sm">
                                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>${car.type}</div>
                                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.286 0M11 11a4 4 0 11-8 0 4 4 0 018 0z" /></svg>${car.seats} Kursi</div>
                                <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>${car.transmission}</div>
                            </div>
                            <div class="mt-6 flex justify-between items-center">
                                <div>
                                    <p class="text-xl font-extrabold text-primary">Rp ${car.price.toLocaleString('id-ID')}</p>
                                    <p class="text-sm text-slate-500">/ hari</p>
                                </div>
                                <a href="https://wa.me/6287887406727?text=Halo,%20saya%20tertarik%20menyewa%20" target="_blank" class="bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-300">
                                    Sewa
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                carGrid.innerHTML += carCard;
            });
        }

        // Event listener untuk tombol filter
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                renderCars(filter);
            });
        });

        // Render mobil saat halaman pertama kali dimuat
        renderCars();
    }


    // =========================================================================
    //  LOGIKA UNTUK NAVBAR MOBILE
    // =========================================================================
    const burgerMenuBtn = document.getElementById('burger-menu');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function openMenu() {
        if(mobileMenu) mobileMenu.classList.remove('translate-x-full');
    }

    function closeMenu() {
        if(mobileMenu) mobileMenu.classList.add('translate-x-full');
    }
    
    if(burgerMenuBtn && closeMenuBtn && mobileMenu) {
        burgerMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        // Klik di luar menu untuk menutup
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) closeMenu();
        });
        // Klik link di menu untuk menutup
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
    }


    // =========================================================================
    //  UPDATE TAHUN OTOMATIS DI FOOTER
    // =========================================================================
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});