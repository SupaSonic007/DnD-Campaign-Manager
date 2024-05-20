import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <h1>Home</h1>
                <br />
                <div className="infoPanes">
                    <div className="leftInfo">
                        <h2>Characters</h2>
                        Character 1
                    </div>
                    <div className="rightInfo">
                        <h2>Campaigns</h2>
                        Campaign 1
                    </div>
                </div>
            </div>
        </main>
    );
}
