import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { urls } from "../../utils/url";

export const Welcome = () => {
    return (
        <React.Fragment>
            <Typography variant="headline"
                component="h2"
            >
                Welcome
                 </Typography>
            {
                Object.values(urls).map((url, index) => {
                    return <Button raised
                        key={index}
                        component={props =>
                            <Link to={url.path} {...props} />
                        }
                    >
                        {url.name}
                    </Button>
                })
            }
        </React.Fragment>
    )
};