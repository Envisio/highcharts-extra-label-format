# highcharts-extra-label-format
This package adds on more format string options available to Highcharts.

## Duration Format Strings

Format: <pre>%D<*durationUnit*><*modifier*></pre>

### Duration Units:

Refers to the component of a duration that is desired.

Available Options:
- `s`: second
- `m`: minute
- `h`: hour
- `d`: day


### Modifiers:

Depends on usage of format string.

- `t`: Total rounded to the nearest integer. Used for displaying a single unit of duration.

Example:
<pre>
Format String: '%Dht'
Input: '89100000' (1 day, 45 minutes in milliseconds)
Result: '24 hours'
</pre>

- `p`: The specified component of the duration with range depending on specified unit. Used when combining duration format strings for non-leading units.
- `c`: The specified component of the duration without range limitation. Used when combining duration format strings for leading unit.

Example:
<pre>
Format String: '%Dmc minutes, %Dsp seconds'
Input: '13523000' (3 hours, 45 minutes, 23 seconds in milliseconds)
Result: '225 minutes, 23 seconds
</pre>


Note how the `p` modifier is used for the number of seconds to keep it under 60 seconds since the extra seconds would be captured by the minutes format string in this example.



