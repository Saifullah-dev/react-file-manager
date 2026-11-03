// Runs async tasks with at most `limit` of them in flight at once
export const createLimiter = (limit: number) => {
  let active = 0;
  const queue: (() => void)[] = [];

  const next = () => {
    if (active >= limit || queue.length === 0) return;
    active++;
    queue.shift()!();
  };

  return <T>(task: () => Promise<T>) =>
    new Promise<T>((resolve, reject) => {
      queue.push(() => {
        task()
          .then(resolve, reject)
          .finally(() => {
            active--;
            next();
          });
      });
      next();
    });
};
