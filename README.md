
# Terraform CDK newrelic Provider tracks ~> 3.7

This repo builds and publishes the Terraform newrelic Provider bindings for [CDK for Terraform](https://cdk.tf).

Is based directly on newrelic 3.27.7

## Available Packages

### NPM

The npm package is available at [https://www.npmjs.com/package/@cdktf/provider-newrelic](https://www.npmjs.com/package/@cdktf/provider-newrelic).

`npm install @cdktf/provider-newrelic`

### PyPI

The PyPI package is available at [https://pypi.org/project/cdktf-cdktf-provider-newrelic](https://pypi.org/project/cdktf-cdktf-provider-newrelic).

`pipenv install cdktf-cdktf-provider-newrelic`

### Nuget

The Nuget package is available at [https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Newrelic](https://www.nuget.org/packages/HashiCorp.Cdktf.Providers.Newrelic).

`dotnet add package HashiCorp.Cdktf.Providers.Newrelic`

### Maven

The Maven package is available at [https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-newrelic](https://mvnrepository.com/artifact/com.hashicorp/cdktf-provider-newrelic).

```
<dependency>
    <groupId>com.hashicorp</groupId>
    <artifactId>cdktf-provider-newrelic</artifactId>
    <version>[REPLACE WITH DESIRED VERSION]</version>
</dependency>
```


### Go

The go package is generated into the [`github.com/cdktf/cdktf-provider-newrelic-go`](https://github.com/cdktf/cdktf-provider-newrelic-go) package.

`go get github.com/cdktf/cdktf-provider-newrelic-go/newrelic`

## Docs

Find auto-generated docs for this provider here: 

- [Typescript](./docs/API.typescript.md)
- [Python](./docs/API.python.md)
- [Java](./docs/API.java.md)
- [C#](./docs/API.csharp.md)
- [Go](./docs/API.go.md)

You can also visit a hosted version of the documentation on [constructs.dev](https://constructs.dev/packages/@cdktf/provider-newrelic).

## Versioning

This project is explicitly not tracking the Terraform newrelic Provider version 1:1. In fact, it always tracks `latest` of `~> 3.7` with every release. If there are scenarios where you explicitly have to pin your provider version, you can do so by generating the [provider constructs manually](https://cdk.tf/imports).

These are the upstream dependencies:

- [Terraform CDK](https://cdk.tf)
- [Terraform newrelic Provider](https://registry.terraform.io/providers/newrelic/newrelic/3.27.7)
    - This links to the minimum version being tracked, you can find the latest released version [in our releases](https://github.com/cdktf/cdktf-provider-newrelic/releases)
- [Terraform Engine](https://terraform.io)

If there are breaking changes (backward incompatible) in any of the above, the major version of this project will be bumped.

## Features / Issues / Bugs

Please report bugs and issues to the [terraform cdk](https://cdk.tf) project:

- [Create bug report](https://cdk.tf/bug)
- [Create feature request](https://cdk.tf/feature)

## Contributing

### projen

This is mostly based on [projen](https://github.com/eladb/projen), which takes care of generating the entire repository.

### cdktf-provider-project based on projen

There's a custom [project builder](https://github.com/hashicorp/cdktf-provider-project) which encapsulate the common settings for all `cdktf` providers.

### Provider Version

The provider version can be adjusted in [./.projenrc.js](./.projenrc.js).

### Repository Management

The repository is managed by [Repository Manager](https://github.com/hashicorp/cdktf-repository-manager/)
