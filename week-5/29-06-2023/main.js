$(document).ready(function () {
    $(".generator").click(function () {
        const computer = $(this).closest(".computer");

        const processorId = computer.find(".processor").attr("id");
        const dataId = computer.data("id");
        const bus = computer.find(".BUS").text();

        console.log(`Processor ID: ${processorId}\nComputer’s data-id: ${dataId}\nBUS: ${bus}`);
    });

    $(".validator").click(function () {
        const computer = $(this).closest(".computer");

        const generatorText = computer.find(".generator").text();
        const mb = computer.find(".MB").text();
        const qr1 = computer.find(".QR").eq(0).text();
        const qr2 = computer.find(".QR").eq(1).text();

        console.log(`Generator Text: ${generatorText}\nMB: ${mb}\nQR 1: ${qr1}\nQR 2: ${qr2}`);
    });
});