export function formatSize(bytes) {
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${(bytes / (1024 ** i)).toFixed(1)}KB`
};
