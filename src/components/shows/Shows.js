import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowsContent } from "../../store/actions/showActions";
import BackgroundCarousel from "../layout/BackgroundCarousel";
import ItemsCarousel from "../layout/ItemsCarousel";

const Shows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowsContent());
  }, [dispatch]);

  const airingToday = useSelector((state) => state.shows.airingToday);
  const onTheAir = useSelector((state) => state.shows.onTheAirShows);
  const topRatedShow = useSelector((state) => state.shows.topRatedShow);
  const showTrendings = useSelector((state) => state.shows.showTrendings);

  return (
    <>
      <BackgroundCarousel results={showTrendings} desc='SHOW TRENDING' />
      <ItemsCarousel results={airingToday} type='show' heading='AIRING TODAY' />
      <ItemsCarousel results={onTheAir} type='show' heading='ON THE AIR' />
      <ItemsCarousel
        results={topRatedShow}
        type='show'
        heading='TOP RATED TV SHOWS'
      />
    </>
  );
};

export default Shows;
