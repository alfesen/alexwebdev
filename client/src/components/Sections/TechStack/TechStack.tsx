import TechStackList from "@/components/Features/TechStackList/TechStackList";
import TechStackNavigation from "@/components/Features/TechStackList/TechStackNavigation";
import ContentGrid from "@/components/UI/Grid/ContentGrid";
import { animated, useInView, useSpring } from "@react-spring/web";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const TechStack = () => {
  const [page, setPage] = useState<string>();
  const [ref, inView] = useInView({ once: true, rootMargin: "10%" });

  const [props] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
  }));

  const { data, isLoading, isError } = useQuery({
    queryKey: ["tech stack categories"],
    queryFn: async () => {
      const { data: categories } = await axios.get(
        `http://localhost:3000/tech`
      );
      const page = Object.keys(categories)[0];
      setPage(page);
      return categories;
    },
  });

  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <></>;
  }
  const keys = Object.keys(data);

  const AnimatedContainer = animated(ContentGrid);

  return (
    <section ref={ref}>
      {!isLoading && inView && page && (
        <AnimatedContainer style={props}>
          <TechStackNavigation keys={keys} page={page} setPage={setPage} />
          <TechStackList items={data[page]} />
        </AnimatedContainer>
      )}
    </section>
  );
};

export default TechStack;
