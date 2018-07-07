$(function () {
    // Get table element and store as variable
    const table = document.getElementById('pixelCanvas');

    function makeGrid() {
        // Event Listener for submit

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

        // event listener for cell clicking
        $('td').click(function () {
            // select colour input
            const selectedColor = $('#colorPicker').val();
            $(this).css('background-color', selectedColor);
        });

        // this event listeners will clear canvas on change in input values
        $('#inputHeight').on('change', function () {
            $('#pixelCanvas').html('');
        })
        $('#inputWeight').on('change', function () {
            $('#pixelCanvas').html('');
        })
        $('#colorPicker').on('change', function () {
            colorAdder();
        })


        // to be called after erasing
        function colorAdder() {
            $('td').click(function () {
                // select colour input
                const selectedColor = $('#colorPicker').val();
                $(this).css('background-color', selectedColor);
            });
        }

    };


    $('#input').on('click', function (event) {
        makeGrid();
        event.preventDefault();
        // colorAdder();

    });

    function cellCleaner() {
        let backgroundColor = $('body').css('background-color');
        let canvas = $('#pixelCanvas');
        let targetCell = canvas.find('td');
        targetCell.click(function () {
            $(this).css('background-color', backgroundColor);
        })
    }

    let eraseCell = $('#eraser')
    eraseCell.click(function (event) {
        event.preventDefault();
        cellCleaner();
    });



    // TODO: Add an onchange function to the color picker.
});