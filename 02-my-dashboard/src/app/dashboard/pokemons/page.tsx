import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&${offset}=0`)
        .then(response => response.json());

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
        image: pokemon.url
    }))

    return pokemons;
}

export default async function PokemonsPage() {
    
    const pokemons = await getPokemons(151);
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemon list <small>static</small></span>
            <div className="flex flex-wrap items-center justify-center">
                <PokemonGrid pokemons={pokemons}/>
            </div>
        </div>
    );
}