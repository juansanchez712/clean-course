(() => {

    // función para obtener información de una película por Id
    function getInformationMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getInformationActorsByMovie( movie: string ) {
        console.log({ movie });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActorById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        cast: string[];
        description: string; 
        rating: number;
        title: string;
    }
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    //Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        // if ( isDead ) return 1500;
        
        // if ( isSeparated ) return 2500;

        // return isRetired ? 3000 : 4000;

        let result = isDead ? 1500 : (isSeparated ? 2500 : (isRetired ? 3000 : 4000))
        return result;


    }

    


})();