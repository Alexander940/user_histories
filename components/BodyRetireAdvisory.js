import styles from '../styles/BodyRetireAdvisory.module.css';
import { ParticipantList } from './ParticipantList.js';
import { ParticipantItem } from './ParticipantItem.js';

const participants = [
    {text: 'Pepito 1'},
    {text: 'Pepito 2'},
    {text: 'Pepito 3'},
    {text: 'Pepito 4'},
    {text: 'Pepito 5'},
];

const buttons = [
    get_out_advisory = document.getElementById("button_get_out_advisory"),
]

get_out_advisory.addEventListener("click",delete_participant)

let nombre_monitoria = 'Monitoria COE II'

function BodyRetireAdvisory(){
    return(
        <section className={styles.body_page}>
            <section className={styles.info_and_button_section}>
                <section className={styles.info_section}>
                    <section className={styles.nombre_monitoria_section}>
                        <p>
                            {nombre_monitoria}
                        </p>
                    </section>
                    <section className={styles.info_monitoria_section}>
        
                    </section>
                </section>
                <section className={styles.button_salir_section}>
                    <input type="button" id="button_get_out_advisory" className={styles.button_salir} value="SALIR DE LA ASESORIA" />
                </section>
            </section> 
            <section className={styles.participantes_section}>
                <section className={styles.title_paticipantes_section}>
                    <h1>
                        Participantes
                    </h1>
                </section>
                {<ParticipantList>

                    {participants.map(participant =>
                        <ParticipantItem key={participant.text} text={participant.text}/>)}

                    </ParticipantList>}
            </section>
        </section>
     
    );
}

function delete_participant(){
    participants.pop;
}

export { BodyRetireAdvisory };