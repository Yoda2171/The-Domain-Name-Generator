function dominio() {

    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let domain = [".com", ".cl"];

    for (let i = 0; i < pronoun.length; i++) {

        for (let ad = 0; ad < adj.length; ad++) {

            for (let no = 0; no < noun.length; no++) {

                for (let main = 0; main < domain.length; main++) {

                    console.log(pronoun[i] + adj[ad] + noun[no] + domain[main]);
                }




            }


        }


    }






}
dominio()