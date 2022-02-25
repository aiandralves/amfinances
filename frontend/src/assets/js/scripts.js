const Modal = {
    init() {
        const btModal = document.querySelectorAll('[data-modal="button"]');
        btModal.forEach((btn) => btn.addEventListener('click', this.toggle));
    },
    toggle: (e) => {
        const modalArea = document.querySelector('[data-modal="modal"]');

        if (modalArea) {
            if (e) e.preventDefault();
            modalArea.classList.toggle('active');
        }
    },
};

const Close = {
    btnCancel: document.querySelector('#cancelar'),

    cancel(e) {
        Modal.toggle(e);
    },

    init() {
        this.btnCancel.addEventListener('click', this.cancel);
    },
};

Modal.init();
Close.init();
