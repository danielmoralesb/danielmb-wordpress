<?php

$teams = array('team1', 'team2', 'team3');
$count = 0;
while ($count < count($teams)) {
    echo "<li>$teams[$count] </li>";
    $count++;
}

?>
<h1><?php bloginfo('name') ?></h1>
<p><?php bloginfo('description') ?></p>
<ul>
    <?php foreach ($teams as $team) : ?>
        <li><?php echo $team; ?></li>
    <?php endforeach; ?>

    <p>This is a test</p>