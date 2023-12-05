module.exports = srv => {
    srv.on( "runTest", () => {
        return "Funktioniert!";
    });
}