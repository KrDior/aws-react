import { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
    service: {
        name: 'react-ui-shop-app'
    },
    frameworkVersion: '>=1.72.0',
    provider: {
        name: 'aws',
        runtime: 'nodejs12.x',
        region: 'eu-central-1'
    },
    resources: {
        Resources: {
            ServerlessStaticBucket: {
                Type: 'AWS::S3::Bucket',
                Properties: {
                    BucketName: 'ss-fsmp-serverless-static-bucket',
                    AccessControl: 'PublicRead',
                    WebsiteConfiguration: {
                        IndexDocument: 'index.html',
                        ErrorDocument: 'index.html'
                    }
                }
            },
            StaticSiteS3BucketPolicy: {
                Type: 'AWS::S3::BucketPolicy',
                Properties: {
                    Bucket: {
                        Ref: 'ServerlessStaticBucket'
                    },
                    PolicyDocument: {
                        Statement: [
                            {
                                Sid: 'PublicReadGetObject',
                                Effect: 'Allow',
                                Principal: '*',
                                Action: [
                                    's3:GetObject'
                                ],
                                Resource: 'arn:aws:s3:::ss-fsmp-serverless-static-bucket/*'
                            }
                        ]
                    }
                }
            },
            ServerlessStaticWebsiteCloudFrontDistribution: {
                Type: 'AWS::CloudFront::Distribution',
                Properties: {
                    DistributionConfig: {
                        Origins: [
                            {
                                DomainName: 'ss-fsmp-serverless-static-bucket.s3.eu-west-1.amazonaws.com',
                                Id: 'ServerlessStaticWebsite',
                                CustomOriginConfig: {
                                    HTTPSPort: 443,
                                    OriginProtocolPolicy: 'https-only'
                                }
                            }
                        ],
                        Enabled: true,
                        DefaultRootObject: 'index.html',
                        DefaultCacheBehavior: {
                            TargetOriginId: 'ServerlessStaticWebsite',
                            ViewerProtocolPolicy: 'redirect-to-https',
                            ForwardedValues: {
                                QueryString: false,
                                Cookies: {
                                    Forward: 'none'
                                }
                            },
                            AllowedMethods: [
                                'DELETE',
                                'GET',
                                'HEAD',
                                'OPTIONS',
                                'PATCH',
                                'POST',
                                'PUT'
                            ]
                        },
                        ViewerCertificate: {
                            CloudFrontDefaultCertificate: true
                        }
                    }
                }
            }
        },
        Outputs: {
            ServerlessStaticBucketName: {
                Value: {
                    Ref: 'ServerlessStaticBucket'
                }
            },
            ServerlessStaticBucketURL: {
                Value: {
                    'Fn::GetAtt': [
                        'ServerlessStaticBucket',
                        'WebsiteURL'
                    ]
                }
            },
            ServerlessStaticWebsiteCloudFrontDistribution: {
                Value: {
                    'Fn::GetAtt': [
                        'ServerlessStaticWebsiteCloudFrontDistribution',
                        'DomainName'
                    ]
                }
            }
        }
    },
    plugins: [
        'serverless-s3-sync'
    ],
    custom: {
        s3Sync: [
            {
                bucketNameKey: 'ServerlessStaticBucketName',
                localDir: 'build/'
            }
        ]
    }
}

module.exports = serverlessConfiguration;
