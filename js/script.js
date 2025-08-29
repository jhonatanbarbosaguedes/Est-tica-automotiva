document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero button scroll to agenda
    const heroButton = document.querySelector('#agendar-btn');
    if (heroButton) {
        heroButton.addEventListener('click', () => {
            const agendaSection = document.querySelector('#agenda');
            if (agendaSection) {
                const offsetTop = agendaSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // WhatsApp integration function
    function sendToWhatsApp(date, service = '') {
        const phoneNumber = '5544984268112';
        const message = `Olá! Gostaria de agendar um serviço de estética automotiva para o dia ${date}.${service ? ` Serviço: ${service}` : ''} Podemos conversar sobre os detalhes?`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // Agenda functionality
    const calendarContainer = document.getElementById('calendar-container');
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // Dummy data for occupied days (for demonstration)
    // In a real application, this would come from a backend or local storage
    const occupiedDays = {
        // Example: 'YYYY-MM-DD': true
        '2025-08-27': true,
        '2025-08-28': true,
        '2025-08-30': true,
        '2025-09-05': true,
        '2025-09-12': true,
        '2025-09-15': true,
        '2025-09-20': true
    };

    function renderCalendar(month, year) {
        calendarContainer.innerHTML = ''; // Clear previous calendar

        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        const calendarHeader = document.createElement('div');
        calendarHeader.classList.add('calendar-header');
        calendarHeader.innerHTML = `
            <button id="prevMonth">&lt;</button>
            <h2>${monthNames[month]} ${year}</h2>
            <button id="nextMonth">&gt;</button>
        `;
        calendarContainer.appendChild(calendarHeader);

        const calendarGrid = document.createElement('div');
        calendarGrid.classList.add('calendar-grid');

        const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        daysOfWeek.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.classList.add('day-header');
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('calendar-day', 'empty');
            calendarGrid.appendChild(emptyDiv);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = day;

            const fullDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const displayDate = `${day}/${month + 1}/${year}`;

            if (occupiedDays[fullDate]) {
                dayDiv.classList.add('occupied');
                dayDiv.title = 'Ocupado - Já agendado';
            } else {
                dayDiv.classList.add('available');
                dayDiv.title = 'Disponível para agendamento - Clique para agendar via WhatsApp';
                dayDiv.addEventListener('click', () => {
                    const services = [
                        'Lavagem Especializada',
                        'Polimento Profissional', 
                        'Cristalização de Vidros',
                        'Proteção de Pintura'
                    ];
                    
                    const serviceChoice = prompt(`Escolha o serviço para ${displayDate}:\n\n1 - ${services[0]}\n2 - ${services[1]}\n3 - ${services[2]}\n4 - ${services[3]}\n\nDigite o número do serviço (1-4) ou deixe em branco para escolher depois:`);
                    
                    let selectedService = '';
                    if (serviceChoice && serviceChoice >= 1 && serviceChoice <= 4) {
                        selectedService = services[serviceChoice - 1];
                    }
                    
                    sendToWhatsApp(displayDate, selectedService);
                });
            }

            // Highlight today
            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today');
            }

            // Disable past dates
            const currentDate = new Date(year, month, day);
            if (currentDate < today.setHours(0, 0, 0, 0)) {
                dayDiv.classList.add('past');
                dayDiv.title = 'Data passada';
            }

            calendarGrid.appendChild(dayDiv);
        }

        calendarContainer.appendChild(calendarGrid);

        // Add event listeners for navigation buttons
        document.getElementById('prevMonth').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });
    }

    // Initialize calendar
    renderCalendar(currentMonth, currentYear);

    // Add calendar styles
    const style = document.createElement('style');
    style.innerHTML = `
        .calendar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            background: linear-gradient(45deg, #77aaff, #5588dd);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(119, 170, 255, 0.3);
        }
        .calendar-header h2 {
            margin: 0;
            font-size: 1.5em;
            font-weight: 600;
        }
        .calendar-header button {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 1.5em;
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 50%;
            transition: background-color 0.3s ease;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .calendar-header button:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        .calendar-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 8px;
            background-color: #fff;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .day-header {
            font-weight: bold;
            text-align: center;
            padding: 12px 0;
            background-color: #f8f9fa;
            border-radius: 8px;
            color: #666;
            font-size: 0.9em;
        }
        .calendar-day {
            padding: 15px 0;
            text-align: center;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .calendar-day.empty {
            cursor: default;
        }
        .calendar-day.available {
            background-color: #e8f5e8;
            color: #2d5a2d;
            border: 2px solid transparent;
        }
        .calendar-day.available:hover {
            background-color: #d4edda;
            border-color: #77aaff;
            transform: scale(1.05);
        }
        .calendar-day.occupied {
            background-color: #ffe6e6;
            color: #cc0000;
            cursor: not-allowed;
            border: 2px solid #ffcccc;
        }
        .calendar-day.past {
            background-color: #f5f5f5;
            color: #999;
            cursor: not-allowed;
        }
        .calendar-day.today {
            border: 3px solid #77aaff;
            font-weight: bold;
            box-shadow: 0 0 10px rgba(119, 170, 255, 0.3);
        }
        @media (max-width: 768px) {
            .calendar-header {
                padding: 10px 15px;
            }
            .calendar-header h2 {
                font-size: 1.2em;
            }
            .calendar-header button {
                width: 35px;
                height: 35px;
                font-size: 1.2em;
            }
            .calendar-grid {
                padding: 15px;
                gap: 5px;
            }
            .calendar-day {
                padding: 10px 0;
                min-height: 40px;
                font-size: 0.9em;
            }
            .day-header {
                padding: 8px 0;
                font-size: 0.8em;
            }
        }
    `;
    document.head.appendChild(style);
});


