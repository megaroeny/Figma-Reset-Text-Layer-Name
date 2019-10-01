figma.currentPage.selection.forEach(node => {
    if (node.type == 'TEXT') {
        node.autoRename = true;
        //node.name = '';
    }
});
figma.closePlugin();
