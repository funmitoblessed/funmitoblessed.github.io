$(function() {
    // Select color input
    // Select size input
    // When size is submitted by the user, call makeGrid()
    // Your code goes here!
    // Get table element and store as variable
    const table = document.getElementById('pixelCanvas');

    function makeGrid() {
        // Event Listener for submit
        $('form').on('submit', function(event) {
            
            // Clear canvas first on submit
            $('#pixelCanvas').html('');

            // select size input
            const gridHeight = $('#inputHeight').val();
            const gridWidth = $('#inputWeight').val();

            // create table body
            const tableBody = document.createElement('TBODY');

            // append table body to table element
            table.appendChild(tableBody);

            // for loop creates cells from variables inputHeight and inputWeight
            for (let row = 0; row < gridHeight; row++) {

                // create table rows
                const tableRow = document.createElement('TR');

                // append rows to table body
                tableBody.appendChild(tableRow);

                // create table cells
                for (let col = 0; col < gridWidth; col++) {
                    const tableData = document.createElement('TD');
                    // append table cells to row
                    tableRow.appendChild(tableData);
                }
            }

            // this event listeners will clear canvas on change in input values
            $('#inputHeight').on('change', function() {
                $('#pixelCanvas').html('');
            })
            $('#inputWeight').on('change', function() {
                $('#pixelCanvas').html('');
            })

            // event listener for cell clicking
            $('td').click(function() {
                // select colour input
                const selectedColor = $('#colorPicker').val();
                $(this).css('background-color', selectedColor);
            });
            event.preventDefault();
        });
    };
    makeGrid()
});