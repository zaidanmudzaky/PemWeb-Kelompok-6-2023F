    // Fungsi untuk mengecek apakah elemen terlihat di viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Fungsi untuk menambahkan kelas "visible" ke elemen yang terlihat
    function handleScroll() {
        const buttons = document.querySelectorAll('.btn_content2');
        buttons.forEach(button => {
            if (isInViewport(button)) {
                button.classList.add('visible');
            }
        });
    }

    // Event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Jalankan fungsi saat halaman pertama kali dimuat
    document.addEventListener('DOMContentLoaded', handleScroll);



document.addEventListener("DOMContentLoaded", () => {
    const elementsRight = document.querySelectorAll(".home_content3 .animate_content34");
    const elementsLeft = document.querySelectorAll(".home_content4 .animate_content34");

    const handleScroll = () => {
        [...elementsRight, ...elementsLeft].forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                if (element.closest('.home_content3')) {
                    element.classList.add("show", "from-right");
                } else if (element.closest('.home_content4')) {
                    element.classList.add("show", "from-left");
                }
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Jalankan saat halaman dimuat
});



//dropdown

const optionMenu = document.querySelector(".select-menu"),
selectBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
})
})



document.addEventListener("DOMContentLoaded", () => {
    const workers = document.querySelectorAll(".worker1");
    const descriptionWorker = document.querySelector(".description-worker");

    // Default content for description-worker
    descriptionWorker.innerHTML = `
        <div class="no-selection">
            <div class="wrong-selection">
            <h4>Anda Belum Memilih Kandidat</h4>
            <p>Harap pilih di sebelah kiri untuk melihat detail di sini</p>
            </>
        </>
    `;

    // Add active class to make the transition visible
    descriptionWorker.classList.add("active");

    workers.forEach((worker) => {
        worker.addEventListener("click", () => {
            // Remove active class for re-rendering animation
            descriptionWorker.classList.remove("active");

            // Delay content update to sync with animation
            setTimeout(() => {
                const name = worker.querySelector(".name-worker").textContent;
                const details = worker.querySelector(".detail-worker").innerHTML;

                descriptionWorker.innerHTML = `
                    <div class="description-header">
                        <div class="profile-header">
                            <img src="../asset/worker1.png" alt="">
                            <div class="rating">
                                <h4>${name}</h4>
                                <div class="rating-specific">
                                <i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i>
                                <p><bold>5/5</bold> (79 ulasan)</p>
                                </div>
                            </div>
                        </div>
                        <div class="button-chat">
                            <i class='bx bxs-chat'></i>
                            <a href="chat.html" class="btn-chat">Chat sekarang</a>
                        </div>
                    </div>
                    <div class="description-main">
                        <div class="info-section">
                            <div class="info-item">
                                <h4>Dari</h4>
                                <p>Surabaya</p>
                            </div>
                            <div class="info-item">
                                <h4>Bahasa</h4>
                                <p>Indonesia, China</p>
                            </div>
                            <div class="info-item">
                                <h4>Rata - rata waktu respon</h4>
                                <p>1 jam</p>
                            </div>
                            <div class="info-item">
                                <h4>Anggota sejak</h4>
                                <p>20 Juli 2023</p>
                            </div>
                        </div>
                        <hr>
                        <div class="description">
                            <p>Halo, saya ${name}. Sebagai Backend Developer, saya memiliki keahlian dalam Node.js, Python, Django, PostgreSQL. Saya berpengalaman dalam merancang dan membangun API yang kuat, serta mengoptimalkan kinerja aplikasi.</p>
                        </div>
                    </div>
                `;

                // Re-add active class to trigger the transition
                descriptionWorker.classList.add("active");
            }, 300); // Delay matches CSS transition duration
        });
    });
});


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

if (wrapper && loginLink && registerLink) {
registerLink.addEventListener('click', () => {
wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
wrapper.classList.remove('active');
});
}