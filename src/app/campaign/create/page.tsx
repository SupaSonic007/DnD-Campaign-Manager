import "./styles.css";

export default function Page() {
    return (
        <main>
            <h1>Create Campaign</h1>
            <div>
                <form>
                    <label htmlFor="campaign_name">
                        <b>
                            Name<span className="req">*</span>:
                        </b>
                    </label>
                    <br />
                    <input
                        id="campaign_name"
                        type="text"
                        placeholder="Campaign Name"
                    ></input>
                    <br />
                    <br />
                    <label htmlFor="campaign_description">
                        <b>Desc:</b>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="campaign_private">
                        <b>
                            Private<span className="req">*</span>:{" "}
                        </b>
                    </label>
                    <input
                        id="campaign_private"
                        type="checkbox"
                        defaultChecked
                    ></input>
                </form>
                <br />
                <br />
                <b>[Players]</b>
                <br/>
            </div>
        </main>
    );
}
