import * as React from "react";

type Props = {
  onMount: (el: HTMLDivElement) => void;
};

export function Section({ onMount }: Props) {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    onMount(sectionRef.current);
  }, [sectionRef.current]);

  return <div ref={sectionRef}>section</div>;
}
