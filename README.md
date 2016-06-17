# jQuery Loading

jQuery pluging useful for showing loading message in your web application

## Installation

Import jquery and jquery-loading.js to your web app. 

```
<script src='jquery.min.js'></script>
<script src='jquery-loading.min.js'></script>
```

## Use

### Start 

To start showing the loading message, just type

```javascript
$().startLoading(options);

```

A loading message will be shown after that.

#### Options

Allowed options and its default values are the following

Option | Type | Default | Description
-------|------|---------|-------------
text | string | Loading... | The text shown


### Stop

To stop showing the message:

```javascript
$().stopLoading(options, callback)

```

The current loading message will be hidden after that.

#### Options

Allowed options and its default values are the following

Option | Type | Default | Description
-------|------|---------|-------------
delay | integer | 0 | The time in seconds before the message is hidden.
