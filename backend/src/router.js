const express = require("express");

const router = express.Router();
const fs = require("fs");

// Ajout de multer
const multer = require("multer");

// Ajout de uuid
const { v4: uuidv4 } = require("uuid");

// On définit la destination de stockage de nos fichiers
const upload = multer({ dest: "./public/uploads/" });

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
// route POST pour recevoir un fichier dont le nom est "avatar"
router.post("/api/avatar", upload.single("avatar"), (req, res) => {
	// On récupère le nom du fichier
	const { originalname } = req.file;

	// On récupère le nom du fichier
	const { filename } = req.file;

	// On utilise la fonction rename de fs pour renommer le fichier
	fs
		.rename(`./public/uploads/${filename}`, `uploads/${uuidv4()}-${originalname}`, (err) => {
			if (err) throw err;
			res.send("File uploaded");
		});
});
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
