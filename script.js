script.js
function showContent(boxId) {
    // Hide all content sections
    const allContent = document.querySelectorAll('.unit-content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
 
    // Uncheck all radios
    const allRadios = document.querySelectorAll('input[name="unit"]');
    allRadios.forEach(radio => {
        radio.checked = false;
    });
 
    // Show selected content and check the corresponding radio button
    document.getElementById(boxId + '-content').style.display = 'block';
    document.getElementById(boxId.replace('box', 'unit')).checked = true;
}