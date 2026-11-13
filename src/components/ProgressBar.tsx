type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div
      className="progress"
      style={{ width: `${((current + 1) / total) * 100}%` }}
    />
  );
}
