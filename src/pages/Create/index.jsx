import React from 'react'
import './create.scss'

export default function Create() {
    return (
        <>
            <div className="Create">
                <img src="https://www.mo.agency/hubfs/So%20you%20want%20to%20be%20a%20web%20developer.png" />
                <form>
                    <div className="createFormGroup">
                        <label
                            htmlFor="fileInput"
                        >
                            <i class="big image icon"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />

                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />

                    </div>
                    <div className="createFormGroup">
                        <textarea placeholder="Share something new..." type="text" className="writeInput writeText" />
                    </div>
                    <button className="createSubmit">Submit</button>
                </form>
            </div>
        </>
    )
}
