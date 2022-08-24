import React, { useEffect, useState } from "react";
import PokemonCardD from "./PokemonCardD";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const Pokemon = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [count, setcount] = useState(0);

  const getAllPokemons = async () => {
    props.setProgress(10);
    const res = await fetch(loadMore);
    props.setProgress(30);
    const data = await res.json();
    props.setProgress(70);
    props.setProgress(100);
    setLoadMore(data.next);

    setcount(data.count);

    function createPokemonObject(results) {
      props.setProgress(10);
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        props.setProgress(30);
        const data = await res.json();
        props.setProgress(70);
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
      props.setProgress(100);
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line
  }, []);

  

  return (
    <>
      <h1
        className="text-center font-semibold text-[25px]"
        style={{
          color: "white",
          margin: "35px 0px",
          marginTop: "90px",
          textTransform: "capitalize",
        }}
      >
        {props.filterType} Pokemons..
      </h1>
      <InfiniteScroll
        dataLength={allPokemons.length}
        next={getAllPokemons}
        hasMore={allPokemons.length !== count}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {allPokemons.map((pokemonStats) => {
              return (
                pokemonStats.name.includes(props.filterName) &&
                pokemonStats.types[0].type.name.includes(props.filterType) && (
                  <div key={pokemonStats.id} className="flex justify-center">
                  <div className=" my-2" >
                    <PokemonCardD
                      id={pokemonStats.id}
                      image={
                        pokemonStats.sprites.other.dream_world.front_default
                      }
                      name={pokemonStats.name}
                      type={pokemonStats.types[0].type.name}
                      hp1={Math.floor(
                        Math.random() * pokemonStats.stats[0].base_stat + 1
                      )}
                      hp2={pokemonStats.stats[0].base_stat}
                      xp={pokemonStats.base_experience}
                      weight={pokemonStats.weight}
                      height={pokemonStats.height}
                      stardust={Math.floor(Math.random() * 10000 + 1)}
                      candy={Math.floor(Math.random() * 200 + 1)}
                    />
                  </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Pokemon;
