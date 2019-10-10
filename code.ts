let layerCount = (figma.currentPage.selection.length)

figma.currentPage.selection.forEach(node => {
  if (node.type == 'TEXT') {
    node.autoRename = true;
    figma.closePlugin(layerCount + " Text layer names reset ✅");
    return
  }

  else {
    figma.notify("That's not a Text layer silly!", { timeout: 2000 });
    figma.closePlugin();
  }
})