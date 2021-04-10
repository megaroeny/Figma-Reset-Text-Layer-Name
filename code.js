let successCount = 0,
	layerCount = figma.currentPage.selection.length;

if (layerCount === 0) {
	figma.closePlugin("Select at least one Text Layer")
}

figma.currentPage.selection.forEach(node => {
	if (node.type === "TEXT") {
		node.name = "";
		successCount++
	}
	else {
		figma.notify(node.name + " not a Text Layer", { timeout: 2000 })
	}
})

if (layerCount >= 1) {
	figma.notify(successCount + " Text Layer names reset ✅", { timeout: 2000 })
}

figma.closePlugin();
