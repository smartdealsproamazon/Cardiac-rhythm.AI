/**
 * Cardiac Cycle Phase Duration Calculator
 * Logic and Formula Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    // Standard reference values based on heart rate = 75 bpm (Total = 0.8s)
    const STANDARD_PHASES = [
        { name: "Isovolumetric ventricular contraction", duration: 0.03 },
        { name: "Rapid ventricular ejection phase", duration: 0.08 },
        { name: "Slow ventricular ejection phase", duration: 0.16 },
        { name: "Isovolumetric ventricular relaxation", duration: 0.05 },
        { name: "Rapid (passive) ventricular filling", duration: 0.16 },
        { name: "Slow ventricular filling (diastasis)", duration: 0.18 },
        { name: "Atrial contraction", duration: 0.14 }
    ];

    const HR_INPUT = document.getElementById('heartRate');
    const CALC_BTN = document.getElementById('calculateBtn');
    const TABLE_BODY = document.getElementById('tableBody');
    const RESULTS_SECTION = document.getElementById('resultsSection');
    const ERROR_MSG = document.getElementById('errorMessage');
    const TOTAL_DURATION_SPAN = document.getElementById('totalDuration');

    // Modal elements
    const MODAL_OVERLAY = document.getElementById('modalOverlay');
    const MODAL_TITLE = document.getElementById('modalTitle');
    const MODAL_CONTENT = document.getElementById('modalContent');
    const CLOSE_MODAL = document.getElementById('closeModal');

    // Core Calculation Function
    function calculateCardiacCycle() {
        // 1. Sanitize and Validate Input
        const hrValue = HR_INPUT.value.trim();
        const hr = parseFloat(hrValue);

        // Clear previous state
        ERROR_MSG.textContent = "";
        RESULTS_SECTION.classList.add('hidden');
        TABLE_BODY.innerHTML = "";

        if (isNaN(hr) || hrValue === "") {
            ERROR_MSG.textContent = "Please enter a valid numeric heart rate.";
            return;
        }

        if (hr < 20 || hr > 220) {
            ERROR_MSG.textContent = "Heart rate must be between 20 bpm and 220 bpm.";
            return;
        }

        /**
         * Formula Logic:
         * 1. Total Cardiac Cycle Duration (seconds) = 60 / Heart Rate
         * 2. Scaling Factor = Total Duration / 0.8 (where 0.8 is the standard duration at 75bpm)
         * 3. Adjusted Phase Duration = Standard Phase Duration × Scaling Factor
         */
        const totalDuration = 60 / hr;
        const scalingFactor = totalDuration / 0.8;

        // Update total duration display
        TOTAL_DURATION_SPAN.textContent = totalDuration.toFixed(4);

        // 5. Results Display with safe DOM manipulation (textContent)
        STANDARD_PHASES.forEach(phase => {
            const adjustedDuration = phase.duration * scalingFactor;
            
            const tr = document.createElement('tr');
            
            const tdName = document.createElement('td');
            tdName.textContent = phase.name;
            
            const tdVal = document.createElement('td');
            tdVal.textContent = adjustedDuration.toFixed(4);
            
            tr.appendChild(tdName);
            tr.appendChild(tdVal);
            TABLE_BODY.appendChild(tr);
        });

        RESULTS_SECTION.classList.remove('hidden');
    }

    // Modal Handling Functions
    function openModal(type) {
        let title = "";
        let content = "";

        switch(type) {
            case 'contact':
                title = "Contact Information";
                content = `<p>For any issues or information, please email at:</p>
                           <p><strong>fa25-phm-072@cuilahore.edu.pk</strong></p>
                           <p>Student Name: Muhammad Rizwan</p>`;
                break;
            case 'terms':
                title = "Terms & Conditions";
                content = `<ul>
                            <li>This website is an educational tool designed for medical and pharmacy students.</li>
                            <li>Calculations are based on standard physiological assumptions.</li>
                            <li>Results are intended for educational purposes only.</li>
                            <li>The information should not be used for medical diagnosis or treatment.</li>
                            <li>The creator is not responsible for misuse of the information.</li>
                           </ul>`;
                break;
            case 'privacy':
                title = "Privacy Policy";
                content = `<ul>
                            <li>This website does not collect personal data.</li>
                            <li>No personal information is stored.</li>
                            <li>The heart rate entered by the user is used only for temporary calculations.</li>
                            <li>No cookies or tracking systems are used.</li>
                           </ul>`;
                break;
        }

        // Use innerHTML only for our own defined safe constants above
        MODAL_TITLE.textContent = title;
        MODAL_CONTENT.innerHTML = content;
        MODAL_OVERLAY.classList.remove('hidden');
    }

    function closeModal() {
        MODAL_OVERLAY.classList.add('hidden');
    }

    // Event Listeners
    CALC_BTN.addEventListener('click', calculateCardiacCycle);
    
    // Support "Enter" key for calculation
    HR_INPUT.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateCardiacCycle();
    });

    document.getElementById('contactBtn').addEventListener('click', () => openModal('contact'));
    document.getElementById('termsBtn').addEventListener('click', () => openModal('terms'));
    document.getElementById('privacyBtn').addEventListener('click', () => openModal('privacy'));
    
    CLOSE_MODAL.addEventListener('click', closeModal);
    
    // Close modal if clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === MODAL_OVERLAY) closeModal();
    });
});
