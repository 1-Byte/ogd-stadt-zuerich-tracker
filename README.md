# ogd-stadt-zuerich-tracker

Track orderable, open government data of the City of Zurich


## Datasets

| Name | Description | Files |
| :-- | :-- | :-- |
| [Baumkataster](https://data.stadt-zuerich.ch/dataset/geo_baumkataster) | tree register | [gsz.baumkataster_baumstandorte.csv](https://github.com/1-Byte/ogd-stadt-zuerich-tracker/raw/baumkataster/gsz.baumkataster_baumstandorte.csv) |


## Background

The city of Zurich provides a lot of interesting datasets on [data.stadt-zuerich.ch](https://data.stadt-zuerich.ch/). Some of these datasets need to be ordered because they are generated according to your specific inputs.

In some cases, a simple link to a file would be easier to use in an application. For this purpose, we use [Github Actions](https://docs.github.com/en/actions) to automatically download datasets on a weekly basis and store them in this repository.


## License

[MIT License](./LICENSE)
