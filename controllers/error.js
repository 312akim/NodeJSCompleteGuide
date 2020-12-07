exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: "" });

    /* Static HTML 404 Page
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    */
};