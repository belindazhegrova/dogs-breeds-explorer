import React from "react";
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import SearchBar from "../../components/Inputs/SearchBar";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DogCard from "../../components/DogCard";
import { getAllDogs } from "../../store/Dogs";
import DogsCardPlaceholder from "../../components/Skeleton/DogsCardPlaceholder";
import FilterContainer from "../../components/FilterContainer";
import Header from "../../components/Header";

const Home = () => {
  const defaultPage = 1;
  const defaultLimit = 6;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(defaultPage);
  const [searchQuery, setSearchQuery] = useState("");
  const [alldogData, setAllDogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterDog, setFilterDog] = useState([]);
  const dogsResponse = useSelector((state) => state.dogs.getAll);

  useEffect(() => {
    dispatch(getAllDogs({ limit: defaultLimit, page, has_breeds: true }));
  }, [dispatch, defaultLimit, page]);

  useEffect(() => {
    if (dogsResponse) {
      switch (true) {
        case dogsResponse.loading:
          setLoading(true);
          break;
        case dogsResponse.success:
          setLoading(false);
          setAllDogData(dogsResponse?.data);
          break;
        case dogsResponse.error:
          setLoading(false);
          break;
        default:
          break;
      }
    }
  }, [dogsResponse]);

  const recall = () => {
    setSearchQuery("");
    setFilterDog([]);
    dispatch(getAllDogs({ limit: defaultLimit, page, has_breeds: true }));
  };

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleFilterInputChange = (event) => {
    const { value } = event.target;
    setFilterDog(value);
  };

  const searchDogs = (dogs, query) => {
    if (!query) {
      return dogs;
    }
    return dogs.filter((dog) =>
      JSON.stringify(dog).toLowerCase().includes(query.toLowerCase())
    );
  };

  const onPageChange = (event, newPage) => {
    setPage(newPage);
    recall();
  };

  const resetFilter = () => {
    setFilterDog([]);
    dispatch(getAllDogs({ limit: defaultLimit, page, has_breeds: true }));
  };

  const dogsData = searchDogs(alldogData, searchQuery);

  const filterDogsByBreedFor = () => {
    const filteredDogs = dogsData.filter((dog) =>
      filterDog.includes(dog.breeds[0].breed_group)
    );
    setAllDogData(filteredDogs);
  };

  return (
    <Grid className={classes.background_home}>
      <Grid className={classes.home}>
        <Header />
        <Grid container className={classes.searchbar_container}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Typography className={classes.searchbar_inner_title}>
              Dogs Breeds Explorer
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className={classes.searchbar_inner_input}
          >
            <SearchBar
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
            />
          </Grid>
        </Grid>

        <FilterContainer
          filterDogsByBreedFor={filterDogsByBreedFor}
          filterDog={filterDog}
          handleChange={handleFilterInputChange}
          resetFilter={resetFilter}
        />

        <Grid
          container
          className="dogCard_Container"
          spacing={2}
          sx={{ mt: 2 }}
        >
          {loading ? (
            <>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <DogsCardPlaceholder index={index} />
              ))}
            </>
          ) : (
            <>
              {dogsData.length > 0 ? (
                dogsData.map((dog, index) => (
                  <Grid item sm={6} xs={12} md={4} lg={4} key={index}>
                    <DogCard dog={dog} />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12} className={classes.noFound}>
                  <Typography className={classes.noFound_title}>
                    No dogs found
                  </Typography>
                </Grid>
              )}
            </>
          )}
        </Grid>
        {alldogData.length > 0 ? (
          <Stack spacing={2} className={classes.pagination_container}>
            <Pagination onChange={onPageChange} page={page} count={10} />
          </Stack>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Home;
