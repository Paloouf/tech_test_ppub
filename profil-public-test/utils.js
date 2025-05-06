export function timeSincePosted(postedDate) {
    const now = new Date();
    const posted = new Date(postedDate);
    const diffMs = now - posted; // Difference in milliseconds
  
    // Convert milliseconds to different units
    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    // Determine which unit to display
    if (days > 0) {
      return `${days} jour${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `${hours} heure${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    } else {
      return `${seconds} seconde${seconds > 1 ? 's' : ''}`;
    }
  }
  