const sortFiles = (items, sortKey = 'name', direction = 'asc') => {
  // Separate folders and files
  const folders = items.filter((file) => file.isDirectory);
  const files = items.filter((file) => !file.isDirectory);

  // Sort function based on key and direction
  const sortFunction = (a, b) => {
    let comparison = 0;

    switch (sortKey) {
      case 'name':
        // Use localeCompare for proper string sorting
        comparison = a.name.localeCompare(b.name);
        break;
      
      case 'size':
        // Handle missing size values
        const sizeA = a.size || 0;
        const sizeB = b.size || 0;
        comparison = sizeA - sizeB;
        break;
      
      case 'modified':
        // Handle date sorting
        const dateA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
        const dateB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
        comparison = dateA - dateB;
        break;
      
      default:
        // Fallback to name sorting
        comparison = a.name.localeCompare(b.name);
    }

    // Apply sort direction
    return direction === 'asc' ? comparison : -comparison;
  };

  // Sort folders and files separately
  const sortedFolders = [...folders].sort(sortFunction);
  const sortedFiles = [...files].sort(sortFunction);

  // Always return folders first, then files
  return [...sortedFolders, ...sortedFiles];
};

export default sortFiles;
