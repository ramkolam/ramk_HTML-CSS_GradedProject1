// Initialize Materialize components
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);

    var dateElems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(dateElems, {
        format: 'yyyy-mm-dd'
    });

    var timeElems = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timeElems, {
        twelveHour: false
    });
});

function validateForm() {
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Full Name Validation
    const fullName = document.getElementById('full-name').value.trim();
    if (fullName === '') {
        document.getElementById('full-name-error').textContent = 'Full Name is required.';
        isValid = false;
    }

    // Contact Number Validation
    const contactNumber = document.getElementById('contact-number').value.trim();
    if (contactNumber === '' || !/^\d{10}$/.test(contactNumber)) {
        document.getElementById('contact-number-error').textContent = 'Valid Contact Number is required (10 digits).';
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById('email').value.trim();
    if (email === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById('email-error').textContent = 'Valid Email Id is required.';
        isValid = false;
    }

    // Address Validation
    const houseNumber = document.getElementById('house-number').value.trim();
    if (houseNumber === '') {
        document.getElementById('house-number-error').textContent = 'House Number is required.';
        isValid = false;
    }

    const street = document.getElementById('street').value.trim();
    if (street === '') {
        document.getElementById('street-error').textContent = 'Street is required.';
        isValid = false;
    }

    const area = document.getElementById('area').value.trim();
    if (area === '') {
        document.getElementById('area-error').textContent = 'Area is required.';
        isValid = false;
    }

    const district = document.getElementById('district').value;
    if (district === '') {
        document.getElementById('district-error').textContent = 'Please select a district.';
        isValid = false;
    }

    // Test Selection Validation
    const tests = document.querySelectorAll('input[type="checkbox"]:checked');
    if (tests.length === 0) {
        document.getElementById('test-error').textContent = 'Please select at least one test.';
        isValid = false;
    }

    // Hard Copy Selection Validation
    const hardcopy = document.querySelector('input[name="hardcopy"]:checked');
    if (!hardcopy) {
        document.getElementById('hardcopy-error').textContent = 'Please select your preference for a hard copy.';
        isValid = false;
    }

    // Date and Time Validation
    const date = document.getElementById('date').value;
    if (date === '') {
        document.getElementById('date-error').textContent = 'Please select a date.';
        isValid = false;
    }

    const time = document.getElementById('time').value;
    if (time === '') {
        document.getElementById('time-error').textContent = 'Please select a time.';
        isValid = false;
    }

    return isValid;
}