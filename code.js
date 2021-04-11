let successCount = 0, layerCount = figma.currentPage.selection.length;
if (layerCount === 0) {
    figma.closePlugin("Select at least one Text Layer");
}
figma.currentPage.selection.forEach(node => {
    if (node.type === "TEXT") {
        node.name = "";
        successCount++;
    }
    else {
        figma.notify('⚠️ "' + node.name + '" name was not reset. A text layer must be selected.', { timeout: 4000 });
    }
});
if (layerCount > 1 && successCount > 1) {
    figma.notify("✅ " + successCount + " text layer names reset", { timeout: 2000 });
}
else if (layerCount == 1 && successCount == 1) {
    figma.notify("✅ Text layer name reset", { timeout: 2000 });
}
figma.closePlugin();
