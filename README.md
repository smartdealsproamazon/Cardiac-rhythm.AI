# Cardiac Cycle Phase Duration Calculator

A professional, educational web application built for medical and pharmacy students to calculate the duration of various phases of the cardiac cycle based on user-defined heart rates (BPM).

## Features

- **Dynamic Calculations**: Uses physiological scaling factors to adjust phase durations based on heart rate.
- **Accurate Formulas**: Implements the standard physiological baseline where 75 BPM corresponds to a 0.8s cardiac cycle.
- **Academic Context**: Highlights creators and academic guidance (Dr. Ihtisham Umar).
- **Responsive Design**: Works on desktops, tablets, and smartphones.
- **Security**: Features input sanitization and safe DOM manipulation to prevent script injection.

## Mathematical Formulas Used

The calculation logic is based on human physiology standards:

1.  **Total Cardiac Cycle (TCC)**: `TCC = 60 / Heart Rate (BPM)`
2.  **Scaling Factor (SF)**: `SF = TCC / 0.8` (0.8 is the cycle length at the reference 75 BPM)
3.  **Phase Duration**: `Phase_New = Phase_Standard * SF`

### Reference Phase Durations (at 75 BPM):
- Isovolumetric contraction: 0.03s
- Rapid ejection: 0.08s
- Slow ejection: 0.16s
- Isovolumetric relaxation: 0.05s
- Rapid filling: 0.16s
- Slow filling: 0.18s
- Atrial contraction: 0.14s

## Installation & Running

This is a front-end purely based on HTML/CSS/JS. No backend server or build steps are required.

1.  Clone or download the project files.
2.  Ensure the file structure is as follows:
    - `index.html`
    - `css/styles.css`
    - `js/scripts.js`
3.  Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

## Usage

1.  Enter a heart rate between **20 and 220 BPM** in the input field.
2.  Click **Calculate**.
3.  View the detailed breakdown of the cardiac phases in the table.
4.  Navigate to the footer for **Terms & Conditions**, **Privacy Policy**, and **Contact Info**.

## Credits

- **Developer**: Muhammad Rizwan
- **Academic Guidance**: Dr. Ihtisham Umar
- **Institution**: COMSATS University Islamabad, Lahore Campus
- **Email**: fa25-phm-072@cuilahore.edu.pk

## Troubleshooting

- **Input Error**: Ensure you enter only numeric values. Decimals are supported.
- **Table Not Displaying**: The results table is hidden until a valid calculation is performed.
- **Range Constraint**: The tool restricts input to human-realistic heart rates (20-220 BPM) for educational accuracy.
