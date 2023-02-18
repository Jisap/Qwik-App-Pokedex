import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
import { Character } from "~/models/character";
import { apiService } from '../../../api/fetch-data';



export default component$(() => {

    const navigate = useNavigate()

    const location = useLocation();
    const id = location.params.id;
    
    const useResource = useResource$(() => apiService( id ))
    
    return(

        <Resource 
            value={ useResource }
            onPending={ () => <p>Loading character ...</p>}
            onResolved={ (character: Character) => {
                return(
                    <>
                    <div class="card-details">
                    <button
                        onClick$={() => navigate('/')}
                        type="button"
                        class="btn-back"    
                    >
                        Go Back
                    </button>
                        <div class="details">
                            <img src={character.image} alt={character.name} class="img-character img-details" />
                            <div class="container-details">
                                <h5 class="text-xl">{ character.name }</h5>
                                <p>{ character.status } - { character.gender }</p>
                                <p> Specie: { character.species }</p>
                            </div>
                        </div>
                        <div class='q-link'>
                            <Link href='/' >Go Back</Link>
                        </div>
                    </div>
                    </>
                )
            }}

        />
    )
})