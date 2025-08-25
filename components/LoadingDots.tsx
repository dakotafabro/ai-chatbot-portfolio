/**
 * Simple, accessible loading indicator.
 */
export default function LoadingDots() {
  return (
    <span role="status" aria-live="polite" aria-label="Loading">
      • • •
    </span>
  );
}
