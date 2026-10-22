# Esecuzione in locale

Per eseguirlo:
- Prerequisiti

    1. Pulumi CLI (>= v3): https://www.pulumi.com/docs/get-started/install/
        ```bash
        # scaricare pulumi
        curl -fsSL https://get.pulumi.com | sh
        which pulumi
        ```

    1. Node.js (>= 14): https://nodejs.org/
        ``` bash
        node -v
        # v22.16.0
        ```

    1. AWS credentials configured (e.g., via `aws configure` or environment variables)
        ``` bash
        export AWS_PROFILE=default
        aws sts get-caller-identity 
        ```

- login a Pulumi in locale e deploy
    ``` bash
    pulumi login -l
    pulumi up
    # PASSPHRASE: <empty>
    ```

- Verifica
    ```bash
    aws s3 ls statefile-bucket-simone-studio
    echo $?
    # 0
    ```

