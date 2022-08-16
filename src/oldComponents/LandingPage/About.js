import React from "react";

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup,
} from "mdb-react-ui-kit";
import Header from "./Header";

class AboutUS extends React.Component {
    render() {
        return (
            <>
                <Header />
                <p
                    style={{
                        background: "#C0C0C0",
                        color: "#fff",
                        padding: "15px",
                        display: "flex",
                        width: "80%",
                        textAlign: "center",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "180px",
                        marginTop: "30px",
                    }}
                >
                    Backlog is the official destination marketing organization (DMO) and
                    convention and visitors bureau (CVB) for the five boroughs of New York
                    City. Our mission is to maximize travel and tourism opportunities
                    throughout the City, build economic prosperity and spread the dynamic
                    image of Amman City around the world.
                </p>
                <p
                    style={{
                        background: "#FC846A",
                        color: "#fff",
                        padding: "15px",
                        display: "flex",
                        width: "30%",
                        textAlign: "center",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "700px",
                        marginTop: "30px",
                    }}
                >
                    Meet the backlog Team
                </p>
                <MDBCardGroup>
                    <MDBCard
                        style={{
                            background: "#C0C0C0",
                            padding: "15px",
                            display: "flex",
                            width: "80%",
                            textAlign: "center",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "180px",
                            marginTop: "30px",
                        }}
                    >
                        <MDBCardImage
                            src="https://ca.slack-edge.com/TNGRRLUMA-U03LPQ166EN-f658e4421226-512"
                            alt="..."
                            position="top"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Huthaifa Alzawahreh</MDBCardTitle>
                            <MDBCardText>Team Leader</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </MDBCardFooter>
                    </MDBCard>

                    <MDBCard
                        style={{
                            background: "#FC846A",
                            padding: "15px",
                            display: "flex",
                            width: "80%",
                            textAlign: "center",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "30px",
                            marginTop: "30px",
                        }}
                    >
                        <MDBCardImage
                            src="https://ca.slack-edge.com/TNGRRLUMA-U03L96DA9D5-8364b2f1ff3d-512"
                            alt="..."
                            position="top"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Ruba Sultan Albrezat</MDBCardTitle>
                            <MDBCardText>Front-end developer</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </MDBCardFooter>
                    </MDBCard>

                    <MDBCard
                        style={{
                            background: "#C0C0C0",
                            padding: "15px",
                            display: "flex",
                            width: "80%",
                            textAlign: "center",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "30px",
                            marginTop: "30px",
                        }}
                    >
                        <MDBCardImage
                            src="https://ca.slack-edge.com/TNGRRLUMA-U03M2E0V6UR-11949e28a586-512"
                            alt="..."
                            position="top"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Ahmed AlAwamleh</MDBCardTitle>
                            <MDBCardText>Front-end developer</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </MDBCardFooter>
                    </MDBCard>
                    <MDBCard
                        style={{
                            background: "#FC846A",
                            padding: "15px",
                            display: "flex",
                            width: "80%",
                            textAlign: "center",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "30px",
                            marginTop: "30px",
                        }}
                    >
                        <MDBCardImage
                            src="https://ca.slack-edge.com/TNGRRLUMA-U03L96E9G6T-34ae4dec1141-512"
                            alt="..."
                            position="top"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Malek Hamdan</MDBCardTitle>
                            <MDBCardText>Back-end developer</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </MDBCardFooter>
                    </MDBCard>
                    <MDBCard
                        style={{
                            background: "#C0C0C0",
                            padding: "15px",
                            display: "flex",
                            width: "80%",
                            textAlign: "center",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "30px",
                            marginTop: "30px",
                            marginRight: "180px",
                        }}
                    >
                        <MDBCardImage
                            src="https://ca.slack-edge.com/TNGRRLUMA-U03MDGVER40-59d28dff618d-512"
                            alt="..."
                            position="top"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Eyad Masnour</MDBCardTitle>
                            <MDBCardText>Back-end developer</MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCardGroup>
            </>
        );
    }
}
export default AboutUS;