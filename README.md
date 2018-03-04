# Input Filter

A tiny library for filtering content based in the input value.

## Sumary

- [Configuration](#configuration)
  - [Select filter](#select-filter)
- [Options](#options)
  - [hasSiblings](#hasSiblings)
- [TODO](#to-do)
- [License](#license)

## Configuration

### Select filter

Configure the select filter using `[data-type="select"]` on the `<select>` tag:

```html
<select class="filter-select" data-type="select">
  <option value="">Filter</option>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
</select>
```

And the items that will be filtered with `data-type="filter-item"` and `data-value=""`:

```html
<div class="content">
  <div class="item red" data-type="filter-item" data-value="red"></div>
  <div class="item green" data-type="filter-item" data-value="green"></div>
  <div class="item blue" data-type="filter-item" data-value="blue"></div>
</div>
```

Initialize the filter call the `filter` function:

```javascript
<script>
filter('[data-type="select"]', false);
</script>
```

#### [View the example here](https://kvnol.github.io/input-filter/examples/select/)

## Options

The input filter has some options:

#### hasSiblings

The `hasSiblings` is a boolean option to filter with more than one `<select>`.

```javascript
<script>
filter('[data-type="select"]', hasSiblings);
</script>
```

#### TO DO

- [x] Create filter for select input
- [ ] Create filter for text input
- [ ] Publish on NPM

## License

Kevin Oliveira &copy; MIT
