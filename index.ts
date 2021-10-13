import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("bucket",
    // {
    //     tags: {
    //         test: "true"
    //     }
    // }
);

const file = new aws.s3.BucketObject("bucket3object", {
    source: new pulumi.asset.FileAsset("file.txt"),
    bucket: bucket,
    // tags: {
    //     test: "true"
    // }
}
    // , { parent: bucket }
)