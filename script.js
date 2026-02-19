// Centralized translations object
const translations = {
    ar: {
        // Header
        appTitle: 'Notes 101',
        subtitle: 'اللهم صلي و سلم علي سيدنا محمد',
        languageCode: 'AR',
        darkMode: 'الوضع الداكن',
        lightMode: 'الوضع الفاتح',

        // Input
        inputPlaceholder: 'ما الذي يدور في ذهنك؟',
        addNoteButton: 'إضافة ملاحظة',

        // Sections
        notesTitle: 'الملاحظات',
        archiveTitle: 'الأرشيف',

        // Empty states
        emptyStateTitle: 'لا توجد ملاحظات بعد',
        emptyStateText: 'ابدأ بإضافة ملاحظتك الأولى أعلاه',
        archiveEmptyStateTitle: 'لا توجد ملاحظات مؤرشفة',
        archiveEmptyStateText: 'قم بأرشفة الملاحظات للحفاظ على مساحة عملك نظيفة',

        // Note actions
        archiveButton: 'أرشفة',
        restoreButton: 'استعادة',
        deleteButton: 'حذف',
        editPlaceholder: 'انقر للتعديل...',

        // Time formats
        justNow: 'الآن',
        minuteAgo: 'منذ دقيقة',
        minutesAgo: 'منذ {n} دقائق',
        hourAgo: 'منذ ساعة',
        hoursAgo: 'منذ {n} ساعات',
        dayAgo: 'منذ يوم',
        daysAgo: 'منذ {n} أيام',
        monthAgo: 'منذ شهر',
        monthsAgo: 'منذ {n} أشهر',
        yearAgo: 'منذ سنة',
        yearsAgo: 'منذ {n} سنوات',
        yearAndMonths: 'منذ {y} سنة و {m} أشهر',
        yearsAndMonths: 'منذ {y} سنوات و {m} أشهر',

        // User Guide
        guideTitle: 'دليل المستخدم',
        guideWelcome: 'مرحباً بك في Notes 101',
        guideWelcomeText: 'تطبيق بسيط وأنيق لإدارة ملاحظاتك مع ميزات متقدمة.',

        guideAddingTitle: '📝 إضافة ملاحظة',
        guideAddingText: 'لإضافة ملاحظة جديدة:',
        guideAddingStep1: 'اكتب نص الملاحظة في حقل الإدخال أعلى الصفحة',
        guideAddingStep2: 'اضغط على زر "إضافة ملاحظة" أو اضغط Enter',
        guideAddingStep3: 'ستظهر الملاحظة الجديدة في أعلى قائمة الملاحظات',

        guideEditingTitle: '✏️ تعديل ملاحظة',
        guideEditingText: 'لتعديل ملاحظة موجودة:',
        guideEditingStep1: 'انقر على نص الملاحظة التي تريد تعديلها',
        guideEditingStep2: 'قم بتعديل النص كما تريد',
        guideEditingStep3: 'انقر خارج الملاحظة أو اضغط Enter لحفظ التغييرات',
        guideEditingNote: 'ملاحظة: تاريخ الإنشاء لن يتغير عند التعديل',

        guideDeletingTitle: '🗑️ حذف ملاحظة',
        guideDeletingText: 'لحذف ملاحظة نهائياً، اضغط على زر "حذف" في الملاحظة المطلوبة.',

        guideArchivingTitle: '📦 أرشفة واستعادة الملاحظات',
        guideArchivingText: 'يمكنك أرشفة الملاحظات للحفاظ على مساحة عملك منظمة:',
        guideArchivingStep1: 'لأرشفة ملاحظة: اضغط على زر "أرشفة"',
        guideArchivingStep2: 'ستنتقل الملاحظة إلى قسم الأرشيف',
        guideArchivingStep3: 'لاستعادة ملاحظة من الأرشيف: اضغط على زر "استعادة"',
        guideArchivingStep4: 'ستعود الملاحظة إلى القائمة الرئيسية',

        guideCollapsibleTitle: '📂 طي وتوسيع الأقسام',
        guideCollapsibleText: 'يمكنك النقر على عنوان قسم "الملاحظات" أو "الأرشيف" لطي أو توسيع القسم، مما يساعدك على التركيز وترتيب مساحة العمل.',

        guideSettingsTitle: '⚙️ قائمة الإعدادات',
        guideSettingsText: 'انقر على زر الإعدادات (الترس) في الزاوية العلوية لإظهار خيارات إضافية مثل تبديل اللغة، تغيير المظهر، وفتح دليل المستخدم.',

        guideThemeTitle: '🌓 تبديل الوضع الداكن/الفاتح',
        guideThemeText: 'اضغط على زر الوضع الداكن/الفاتح في أعلى الصفحة للتبديل بين الوضعين. سيتم حفظ اختيارك تلقائياً.',

        guideLanguageTitle: '🌐 تبديل اللغة',
        guideLanguageText: 'اضغط على زر اللغة (AR/EN) للتبديل بين العربية والإنجليزية. جميع نصوص الواجهة ستتغير فوراً، بينما تبقى ملاحظاتك كما هي.',

        guideTimeTitle: '⏰ عرض الوقت النسبي',
        guideTimeText: 'يعرض التطبيق الوقت المنقضي منذ إنشاء كل ملاحظة بصيغة سهلة القراءة (مثل: منذ 5 دقائق، منذ ساعتين، منذ يوم واحد، إلخ).',

        guideCountersTitle: '🔢 العدادات',
        guideCountersText: 'تعرض العدادات عدد الملاحظات النشطة والمؤرشفة وتتحدث تلقائياً عند إضافة أو حذف أو أرشفة الملاحظات.',

        guideStorageTitle: '💾 التخزين المحلي',
        guideStorageText: 'جميع ملاحظاتك محفوظة محلياً في متصفحك ولن تُفقد عند إغلاق الصفحة أو إعادة تحميلها.',

        guideMobileTitle: '📱 متوافق مع الجوال',
        guideMobileText: 'تم تصميم التطبيق ليعمل بسلاسة على جميع الأجهزة، بما في ذلك الهواتف الذكية والأجهزة اللوحية.',

        guideFooterTitle: '👨‍💻 المطور',
        guideFooterText: 'تم تطوير هذا التطبيق بواسطة المهندس علي عامر. يمكنك زيارة رابط ملفه الشخصي في أسفل الصفحة.',

        // Footer
        footerText: 'تطوير',

        // Truncation
        readMore: '...المزيد',
        readLess: 'أقل',
        lockOrder: 'قفل الترتيب',
        unlockOrder: 'فتح الترتيب'
    },
    en: {
        // Header
        appTitle: 'Notes 101',
        subtitle: 'اللهم صلي و سلم علي سيدنا محمد',
        languageCode: 'EN',
        darkMode: 'Dark Mode',
        lightMode: 'Light Mode',

        // Input
        inputPlaceholder: "What's on your mind?",
        addNoteButton: 'Add Note',

        // Sections
        notesTitle: 'Notes',
        archiveTitle: 'Archive',

        // Empty states
        emptyStateTitle: 'No notes yet',
        emptyStateText: 'Start by adding your first note above',
        archiveEmptyStateTitle: 'No archived notes',
        archiveEmptyStateText: 'Archive notes to keep your workspace clean',

        // Note actions
        archiveButton: 'Archive',
        restoreButton: 'Restore',
        deleteButton: 'Delete',
        editPlaceholder: 'Click to edit...',

        // Time formats
        justNow: 'just now',
        minuteAgo: '1 minute ago',
        minutesAgo: '{n} minutes ago',
        hourAgo: '1 hour ago',
        hoursAgo: '{n} hours ago',
        dayAgo: '1 day ago',
        daysAgo: '{n} days ago',
        monthAgo: '1 month ago',
        monthsAgo: '{n} months ago',
        yearAgo: '1 year ago',
        yearsAgo: '{n} years ago',
        yearAndMonths: '{y} year and {m} months ago',
        yearsAndMonths: '{y} years and {m} months ago',

        // User Guide
        guideTitle: 'User Guide',
        guideWelcome: 'Welcome to Notes 101',
        guideWelcomeText: 'A simple and elegant notes application with advanced features.',

        guideAddingTitle: '📝 Adding a Note',
        guideAddingText: 'To add a new note:',
        guideAddingStep1: 'Type your note text in the input field at the top',
        guideAddingStep2: 'Click "Add Note" button or press Enter',
        guideAddingStep3: 'Your new note will appear at the top of the notes list',

        guideEditingTitle: '✏️ Editing a Note',
        guideEditingText: 'To edit an existing note:',
        guideEditingStep1: 'Click on the note text you want to edit',
        guideEditingStep2: 'Modify the text as needed',
        guideEditingStep3: 'Click outside the note or press Enter to save changes',
        guideEditingNote: 'Note: The creation date will not change when editing',

        guideDeletingTitle: '🗑️ Deleting a Note',
        guideDeletingText: 'To permanently delete a note, click the "Delete" button on the desired note.',

        guideArchivingTitle: '📦 Archiving and Restoring Notes',
        guideArchivingText: 'You can archive notes to keep your workspace organized:',
        guideArchivingStep1: 'To archive a note: Click the "Archive" button',
        guideArchivingStep2: 'The note will move to the Archive section',
        guideArchivingStep3: 'To restore a note from archive: Click the "Restore" button',
        guideArchivingStep4: 'The note will return to the main list',

        guideCollapsibleTitle: '📂 Collapsible Sections',
        guideCollapsibleText: 'You can click on the "Notes" or "Archive" section headers to collapse or expand them, helping you focus and organize your workspace.',

        guideSettingsTitle: '⚙️ Settings Menu',
        guideSettingsText: 'Click the settings button (gear icon) in the top corner to reveal additional options like language toggle, theme switch, and user guide.',

        guideThemeTitle: '🌓 Dark/Light Mode Toggle',
        guideThemeText: 'Click the Dark/Light mode button at the top to switch between themes. Your preference will be saved automatically.',

        guideLanguageTitle: '🌐 Language Toggle',
        guideLanguageText: 'Click the language button (AR/EN) to switch between Arabic and English. All interface text will change instantly, while your notes remain unchanged.',

        guideTimeTitle: '⏰ Relative Time Display',
        guideTimeText: 'The app displays the elapsed time since each note was created in an easy-to-read format (e.g., 5 minutes ago, 2 hours ago, 1 day ago, etc.).',

        guideCountersTitle: '🔢 Counters',
        guideCountersText: 'The counters display the number of active and archived notes and update automatically when you add, delete, or archive notes.',

        guideStorageTitle: '💾 Local Storage',
        guideStorageText: 'All your notes are saved locally in your browser and will not be lost when you close or reload the page.',

        guideMobileTitle: '📱 Mobile Friendly',
        guideMobileText: 'The app is designed to work seamlessly on all devices, including smartphones and tablets.',

        guideFooterTitle: '👨‍💻 Developer',
        guideFooterText: 'This application was developed by Eng Aly Amer. You can visit his profile link at the bottom of the page.',

        // Footer
        footerText: 'Developed By',

        // Truncation
        readMore: '...more',
        readLess: 'less',
        lockOrder: 'Lock Order',
        unlockOrder: 'Unlock Order'
    }
};

// Notes application class to manage all functionality
class NotesApp {
    constructor() {
        // Initialize properties
        this.notes = [];
        this.currentTheme = 'dark';
        this.currentLanguage = 'ar';

        // Get DOM elements
        this.noteInput = document.getElementById('noteInput');
        this.addNoteBtn = document.getElementById('addNoteBtn');
        this.notesContainer = document.getElementById('notesContainer');
        this.archiveContainer = document.getElementById('archiveContainer');
        this.emptyState = document.getElementById('emptyState');
        this.archiveEmptyState = document.getElementById('archiveEmptyState');
        this.notesHeader = document.getElementById('notesHeader');
        this.archiveHeader = document.getElementById('archiveHeader');
        this.notesWrapper = document.getElementById('notesWrapper');
        this.archiveWrapper = document.getElementById('archiveWrapper');
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.themeText = document.getElementById('themeText');
        this.languageToggle = document.getElementById('languageToggle');
        this.languageIcon = document.getElementById('languageIcon');
        this.languageText = document.getElementById('languageText');
        this.activeCounter = document.getElementById('activeCounter');
        this.archiveCounter = document.getElementById('archiveCounter');
        this.guideToggle = document.getElementById('guideToggle');
        this.guideModal = document.getElementById('guideModal');
        this.guideClose = document.getElementById('guideClose');
        this.guideBody = document.getElementById('guideBody');
        this.settingsToggle = document.getElementById('settingsToggle');
        this.headerControls = document.getElementById('headerControls');
        this.guideText = document.getElementById('guideText');
        this.dragToggle = document.getElementById('dragToggle');
        this.dragIcon = document.getElementById('dragIcon');
        this.dragText = document.getElementById('dragText');

        this.dragEnabled = false;

        // Initialize the app
        this.init();
    }

    // Initialize the application
    init() {
        this.loadLanguage();
        this.loadTheme();
        this.loadNotes();
        this.applyLanguage();
        this.renderNotes();
        this.attachEventListeners();
    }

    // Attach event listeners to UI elements
    attachEventListeners() {
        // Add note button click
        this.addNoteBtn.addEventListener('click', () => this.addNote());

        // Add note on Enter key press
        this.noteInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addNote();
            }
        });

        // Auto-detect text direction for input field
        this.noteInput.addEventListener('input', (e) => {
            this.detectAndSetDirection(e.target);
        });

        // Theme toggle button
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Language toggle button
        this.languageToggle.addEventListener('click', () => this.toggleLanguage());

        // Guide toggle button
        this.guideToggle.addEventListener('click', () => this.openGuide());

        // Guide close button
        this.guideClose.addEventListener('click', () => this.closeGuide());

        // Settings toggle button
        this.settingsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.headerControls.classList.toggle('visible');
        });

        // Close settings menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.headerControls.contains(e.target) && e.target !== this.settingsToggle) {
                this.headerControls.classList.remove('visible');
            }
        });

        // Close guide when clicking outside
        this.guideModal.addEventListener('click', (e) => {
            if (e.target === this.guideModal) {
                this.closeGuide();
            }
        });

        // Close guide on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.guideModal.classList.contains('active')) {
                this.closeGuide();
            }
        });

        // Toggle Notes Section
        this.notesHeader.addEventListener('click', () => {
            this.toggleSection(this.notesHeader, this.notesWrapper);
        });

        // Toggle Archive Section
        this.archiveHeader.addEventListener('click', () => {
            this.toggleSection(this.archiveHeader, this.archiveWrapper);
        });

        // Drag Toggle
        this.dragToggle.addEventListener('click', () => {
            this.dragEnabled = !this.dragEnabled;
            this.updateDragUI();
            this.renderNotes();
        });
    }

    // Update Drag & Drop UI state
    updateDragUI() {
        const t = translations[this.currentLanguage];
        if (this.dragEnabled) {
            this.dragIcon.textContent = '🔓';
            this.dragText.textContent = t.unlockOrder;
            this.dragToggle.classList.add('active');
        } else {
            this.dragIcon.textContent = '🔒';
            this.dragText.textContent = t.lockOrder;
            this.dragToggle.classList.remove('active');
        }
    }

    // Toggle section collapse/expand
    toggleSection(header, wrapper) {
        header.classList.toggle('collapsed');
        wrapper.classList.toggle('collapsed');

        // Handle accessibility
        const isCollapsed = header.classList.contains('collapsed');
        header.setAttribute('aria-expanded', !isCollapsed);
    }

    // Detect text direction (RTL/LTR)
    detectAndSetDirection(element) {
        const text = element.value || element.textContent;
        if (!text) {
            element.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
            return;
        }

        const arabicPattern = /[\u0600-\u06FF]/;
        if (arabicPattern.test(text)) {
            element.dir = 'rtl';
        } else {
            element.dir = 'ltr';
        }
    }

    // Add a new note
    addNote() {
        const content = this.noteInput.value.trim();

        if (content === '') {
            this.noteInput.focus();
            return;
        }

        // Create new note object with createdAt timestamp (never changes after creation)
        const note = {
            id: Date.now(),
            content: content,
            createdAt: new Date().toISOString(),
            archived: false
        };

        // Add to the beginning of the array
        this.notes.unshift(note);

        // Save and re-render
        this.saveNotes();
        this.renderNotes();

        // Clear input and focus
        this.noteInput.value = '';
        this.noteInput.style.height = 'auto';
        this.noteInput.focus();
    }

    // Delete a note
    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
        this.renderNotes();
    }

    // Archive a note
    archiveNote(id) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.archived = true;
            this.saveNotes();
            this.renderNotes();
        }
    }

    // Restore a note from archive
    restoreNote(id) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.archived = false;
            this.saveNotes();
            this.renderNotes();
        }
    }

    // Update note content
    updateNote(id, newContent) {
        const note = this.notes.find(n => n.id === id);
        if (note) {
            note.content = newContent;
            this.saveNotes();
        }
    }

    // Save notes to localStorage
    saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
        this.updateCounters();
    }

    // Load notes from localStorage
    loadNotes() {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            try {
                this.notes = JSON.parse(storedNotes);
                // Ensure all notes have required properties
                this.notes = this.notes.map(note => ({
                    ...note,
                    archived: note.archived || false,
                    // Migrate old timestamp field to createdAt
                    createdAt: note.createdAt || note.timestamp || new Date().toISOString()
                }));
            } catch (error) {
                console.error('Error parsing notes:', error);
                this.notes = [];
            }
        }
    }

    // Update note counters
    updateCounters() {
        const activeCount = this.notes.filter(note => !note.archived).length;
        const archiveCount = this.notes.filter(note => note.archived).length;

        this.activeCounter.textContent = activeCount;
        this.archiveCounter.textContent = archiveCount;
    }

    // Create a note card element
    createNoteCard(note, index, isArchived) {
        const t = translations[this.currentLanguage];
        const card = document.createElement('div');
        card.className = 'note-card';

        card.dataset.id = note.id;
        card.dataset.index = index;

        // Note header with timestamp and action buttons
        const header = document.createElement('div');
        header.className = 'note-header';

        // Display relative time based on createdAt (never changes)
        const timestamp = document.createElement('span');
        timestamp.className = 'note-timestamp';
        timestamp.textContent = this.formatRelativeTime(note.createdAt);

        const actions = document.createElement('div');
        actions.className = 'note-actions';

        // Drag & Drop logic
        if (this.dragEnabled && !isArchived) {
            card.setAttribute('draggable', 'true');
            card.classList.add('drag-mode');

            card.addEventListener('dragstart', (e) => {
                card.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/plain', note.id);
            });

            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                document.querySelectorAll('.note-card').forEach(c => c.classList.remove('drag-over'));
            });

            card.addEventListener('dragover', (e) => {
                e.preventDefault();
                const draggingCard = document.querySelector('.dragging');
                if (draggingCard && draggingCard !== card) {
                    card.classList.add('drag-over');
                    const rect = card.getBoundingClientRect();
                    const midpoint = rect.top + rect.height / 2;
                    if (e.clientY < midpoint) {
                        card.parentNode.insertBefore(draggingCard, card);
                    } else {
                        card.parentNode.insertBefore(draggingCard, card.nextSibling);
                    }
                }
            });

            card.addEventListener('dragleave', () => {
                card.classList.remove('drag-over');
            });

            card.addEventListener('drop', (e) => {
                e.preventDefault();
                card.classList.remove('drag-over');
                this.updateNotesOrder();
            });
        } else {
            card.removeAttribute('draggable');
            card.classList.remove('drag-mode');
        }

        // Archive or Restore button
        const archiveBtn = document.createElement('button');
        archiveBtn.className = 'archive-btn';
        if (isArchived) {
            archiveBtn.textContent = t.restoreButton;
            archiveBtn.setAttribute('aria-label', t.restoreButton);
            archiveBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.restoreNote(note.id);
            });
        } else {
            archiveBtn.textContent = t.archiveButton;
            archiveBtn.setAttribute('aria-label', t.archiveButton);
            archiveBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.archiveNote(note.id);
            });
        }

        // Copy button (text-based)
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = this.currentLanguage === 'ar' ? 'نسخ' : 'Copy';

        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(note.content);

            copyBtn.classList.add('show-tooltip');
            setTimeout(() => {
                copyBtn.classList.remove('show-tooltip');
            }, 1200);
        });

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = t.deleteButton;
        deleteBtn.setAttribute('aria-label', t.deleteButton);
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.deleteNote(note.id);
        });

        actions.appendChild(archiveBtn);
        actions.appendChild(copyBtn);
        actions.appendChild(deleteBtn);

        header.appendChild(timestamp);
        header.appendChild(actions);
        card.appendChild(header);

        // Note content (editable)
        const content = document.createElement('div');
        content.className = 'note-content';
        content.contentEditable = true;
        content.setAttribute('aria-label', 'Note content');
        content.setAttribute('data-placeholder', t.editPlaceholder);

        // Truncation logic
        const TRUNCATE_LIMIT = 400;
        let isExpanded = false;

        // Function to update content display
        const updateContentDisplay = () => {
            if (note.content.length > TRUNCATE_LIMIT && !isExpanded) {
                content.textContent = note.content.substring(0, TRUNCATE_LIMIT) + '...';
            } else {
                content.textContent = note.content;
            }
            // Ensure direction is correct for the displayed text
            this.detectAndSetDirection(content);
        };

        // Initial display
        updateContentDisplay();

        // More button
        const moreBtn = document.createElement('button');
        moreBtn.className = 'more-btn';
        moreBtn.textContent = t.readMore;
        moreBtn.style.display = note.content.length > TRUNCATE_LIMIT ? 'block' : 'none';

        moreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isExpanded = !isExpanded;
            updateContentDisplay();
            moreBtn.textContent = isExpanded ? t.readLess : t.readMore;
        });

        // Auto-detect direction on input
        content.addEventListener('input', () => {
            this.detectAndSetDirection(content);
        });

        // Handle focus (expand automatically)
        content.addEventListener('focus', () => {
            if (note.content.length > TRUNCATE_LIMIT && !isExpanded) {
                isExpanded = true;
                updateContentDisplay();
                moreBtn.textContent = t.readLess;
            }
        });

        // Save on blur (when user clicks away) - does NOT update createdAt
        content.addEventListener('blur', () => {
            const newContent = content.textContent.trim();
            if (newContent === '') {
                this.deleteNote(note.id);
            } else {
                // Check if content actually changed
                if (newContent !== note.content) {
                    this.updateNote(note.id, newContent);

                    // Update button visibility and state based on new content
                    if (note.content.length > TRUNCATE_LIMIT) {
                        moreBtn.style.display = 'block';
                        // Collapse after editing to keep list clean
                        isExpanded = false;
                        updateContentDisplay();
                        moreBtn.textContent = t.readMore;
                    } else {
                        moreBtn.style.display = 'none';
                        isExpanded = false;
                        updateContentDisplay();
                    }
                }
            }
        });

        // Prevent Enter key from creating new lines (optional behavior)
        content.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                content.blur();
            }
        });

        card.appendChild(content);
        card.appendChild(moreBtn);

        return card;
    }

    // Render all notes to the DOM
    renderNotes() {
        // Clear containers
        this.notesContainer.innerHTML = '';
        this.archiveContainer.innerHTML = '';

        // Get active and archived notes
        const activeNotes = this.notes.filter(note => !note.archived);
        const archivedNotes = this.notes.filter(note => note.archived);

        // Update counters
        this.updateCounters();

        // Render active notes
        if (activeNotes.length === 0) {
            this.emptyState.style.display = 'block';
        } else {
            this.emptyState.style.display = 'none';
            activeNotes.forEach((note, index) => {
                const card = this.createNoteCard(note, index, false);
                this.notesContainer.appendChild(card);
            });
        }

        // Render archived notes
        if (archivedNotes.length === 0) {
            this.archiveEmptyState.style.display = 'none';
            this.archiveHeader.style.display = 'none';
        } else {
            this.archiveEmptyState.style.display = 'none';
            this.archiveHeader.style.display = 'flex';
            archivedNotes.forEach((note, index) => {
                const card = this.createNoteCard(note, index, true);
                this.archiveContainer.appendChild(card);
            });
        }
    }

    // Update notes order after drag and drop
    updateNotesOrder() {
        const activeCards = Array.from(this.notesContainer.querySelectorAll('.note-card'));
        const activeIds = activeCards.map(card => parseInt(card.dataset.id));

        const archiveCards = Array.from(this.archiveContainer.querySelectorAll('.note-card'));
        const archiveIds = archiveCards.map(card => parseInt(card.dataset.id));

        // Reorder the notes array based on new DOM order
        const reorderedActiveNotes = activeIds.map(id =>
            this.notes.find(note => note.id === id)
        ).filter(note => note !== undefined);

        const reorderedArchiveNotes = archiveIds.map(id =>
            this.notes.find(note => note.id === id)
        ).filter(note => note !== undefined);

        // Combine reordered active notes with reordered archived notes
        this.notes = [...reorderedActiveNotes, ...reorderedArchiveNotes];

        // Save to localStorage
        this.saveNotes();
    }

    // Format timestamp to relative time
    formatRelativeTime(isoString) {
        const date = new Date(isoString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        const t = translations[this.currentLanguage];

        if (diffInSeconds < 60) return t.justNow;

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return diffInMinutes === 1 ? t.minuteAgo : t.minutesAgo.replace('{n}', diffInMinutes);
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return diffInHours === 1 ? t.hourAgo : t.hoursAgo.replace('{n}', diffInHours);
        }

        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) {
            return diffInDays === 1 ? t.dayAgo : t.daysAgo.replace('{n}', diffInDays);
        }

        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return diffInMonths === 1 ? t.monthAgo : t.monthsAgo.replace('{n}', diffInMonths);
        }

        const diffInYears = Math.floor(diffInMonths / 12);
        const remainingMonths = diffInMonths % 12;

        if (remainingMonths === 0) {
            return diffInYears === 1 ? t.yearAgo : t.yearsAgo.replace('{n}', diffInYears);
        } else {
            const yearText = diffInYears === 1 ? t.yearAndMonths : t.yearsAndMonths;
            return yearText.replace('{y}', diffInYears).replace('{m}', remainingMonths);
        }
    }

    // Theme management
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.saveTheme();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        const t = translations[this.currentLanguage];
        if (this.currentTheme === 'dark') {
            this.themeIcon.textContent = '☀️';
            this.themeText.textContent = t.lightMode;
        } else {
            this.themeIcon.textContent = '🌙';
            this.themeText.textContent = t.darkMode;
        }
    }

    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
        }
        this.applyTheme();
    }

    // Language management
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
        this.applyLanguage();
        this.saveLanguage();
        this.renderNotes(); // Re-render to update timestamps
    }

    applyLanguage() {
        const t = translations[this.currentLanguage];
        document.documentElement.lang = this.currentLanguage;
        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';

        // Update UI text
        document.title = t.appTitle;
        document.getElementById('mainTitle').textContent = t.appTitle;
        document.getElementById('subtitle').textContent = t.subtitle;
        this.noteInput.placeholder = t.inputPlaceholder;
        this.addNoteBtn.textContent = t.addNoteButton;
        document.getElementById('notesTitle').textContent = t.notesTitle;
        document.getElementById('archiveTitle').textContent = t.archiveTitle;
        document.getElementById('emptyStateTitle').textContent = t.emptyStateTitle;
        document.getElementById('emptyStateText').textContent = t.emptyStateText;
        document.getElementById('archiveEmptyStateTitle').textContent = t.archiveEmptyStateTitle;
        document.getElementById('archiveEmptyStateText').textContent = t.archiveEmptyStateText;
        document.getElementById('guideModalTitle').textContent = t.guideTitle;
        this.guideText.textContent = t.guideTitle;
        this.languageText.textContent = t.languageCode === 'AR' ? 'English' : 'العربية';
        this.languageIcon.textContent = t.languageCode === 'AR' ? '🇺🇸' : '🇪🇬';
        this.applyTheme(); // Update theme toggle text
        this.updateDragUI(); // Update drag toggle text
    }

    saveLanguage() {
        localStorage.setItem('language', this.currentLanguage);
    }

    loadLanguage() {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            this.currentLanguage = savedLanguage;
        }
    }

    // User Guide
    openGuide() {
        this.renderGuide();
        this.guideModal.classList.add('active');
        this.headerControls.classList.remove('visible');
    }

    closeGuide() {
        this.guideModal.classList.remove('active');
    }

    renderGuide() {
        const t = translations[this.currentLanguage];
        this.guideBody.innerHTML = `
            <div class="guide-section">
                <h3>${t.guideWelcome}</h3>
                <p>${t.guideWelcomeText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideAddingTitle}</h3>
                <p>${t.guideAddingText}</p>
                <ul>
                    <li>${t.guideAddingStep1}</li>
                    <li>${t.guideAddingStep2}</li>
                    <li>${t.guideAddingStep3}</li>
                </ul>
            </div>
            <div class="guide-section">
                <h3>${t.guideEditingTitle}</h3>
                <p>${t.guideEditingText}</p>
                <ul>
                    <li>${t.guideEditingStep1}</li>
                    <li>${t.guideEditingStep2}</li>
                    <li>${t.guideEditingStep3}</li>
                </ul>
                <p class="guide-highlight">${t.guideEditingNote}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideDeletingTitle}</h3>
                <p>${t.guideDeletingText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideArchivingTitle}</h3>
                <p>${t.guideArchivingText}</p>
                <ul>
                    <li>${t.guideArchivingStep1}</li>
                    <li>${t.guideArchivingStep2}</li>
                    <li>${t.guideArchivingStep3}</li>
                    <li>${t.guideArchivingStep4}</li>
                </ul>
            </div>
            <div class="guide-section">
                <h3>${t.guideCollapsibleTitle}</h3>
                <p>${t.guideCollapsibleText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideSettingsTitle}</h3>
                <p>${t.guideSettingsText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideThemeTitle}</h3>
                <p>${t.guideThemeText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideLanguageTitle}</h3>
                <p>${t.guideLanguageText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideTimeTitle}</h3>
                <p>${t.guideTimeText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideCountersTitle}</h3>
                <p>${t.guideCountersText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideStorageTitle}</h3>
                <p>${t.guideStorageText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideMobileTitle}</h3>
                <p>${t.guideMobileText}</p>
            </div>
            <div class="guide-section">
                <h3>${t.guideFooterTitle}</h3>
                <p>${t.guideFooterText}</p>
            </div>
        `;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NotesApp();
});
