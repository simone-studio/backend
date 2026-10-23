import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("state-file-bucket", {bucket: "statefile-bucket-simone-studio"});
const versioning = new aws.s3.BucketVersioning("versioning_example", {
    bucket: bucket.id,
    versioningConfiguration: {
        status: "Disabled",
    },
});

// Export the name of the bucket
export const bucketName = bucket.id;
